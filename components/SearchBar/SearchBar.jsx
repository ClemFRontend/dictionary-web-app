import { useRef, useState } from 'react'
import { View, StyleSheet, TextInput, Pressable, Platform, ActivityIndicator } from 'react-native'
import { colorsPalette, globalStyles } from '../../style'
import { IconCross, IconMagnify } from '../../assets/icons/icons'
import { useSelector } from 'react-redux'
import { Body } from '../Text/Text'
import { fetchWordDef } from '../../services/api'

export default function SearchBar({ setData }) {

    const [text, onChangeText] = useState("Keyboard")
    const [isFocus, setIsFocus] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const [firstRender, setFirstRender] = useState(true)

    const textInputRef = useRef(null);

    const fontFamily = useSelector(state => state.font.value)
    const theme = useSelector(state => state.theme.value)

    if (firstRender) {
        setFirstRender(false)
        handleSubmit()
    }

    async function handleSubmit(e) {
        setIsFocus(false)
        setLoading(true)

        if (handleValidation()) {
            const response = await fetchWordDef(text) // Fetch word

            if (response.title === "No Definitions Found") {
                setData({
                    "title": "No Definitions Found",
                    "message": "Sorry pal, we couldn't find definitions for the word you were looking for.",
                    "resolution": "You can try the search again at later time or head to the web instead."
                })
            }
            else {
                if (response.length !== 0) {
                    setData({}) // Reset data to avoid unwanted behaviour
                    setData({
                        "word": response[0].word,
                        "phonetic": response[0].phonetic,
                        "audios": response[0].phonetics.map(i => i.audio).filter(i => i !== ""),
                        "meanings": response[0].meanings,
                        "sourceUrls": response[0].sourceUrls,
                    })
                }
            }
            setLoading(false)
        }
    }

    function handleValidation() {
        let isValid = true

        // Check if field is empty
        if (text === "") {
            isValid = false
            setErrorMsg("Whoops, can’t be empty…")
        }
        else {
            setErrorMsg("")
        }

        return isValid
    }

    const handleFocus = (e) => {
        if (textInputRef.current) {
            textInputRef.current.focus();
        }
    }

    // const handleBlur = (e) => {
    //     if (textInputRef.current) {
    //         textInputRef.current.blur();
    //     }
    // }


    return (
        <>
            <View style={[
                styles.searchBar,
                globalStyles.flexRowAlignCenter,
                {
                    borderColor: errorMsg === "" ?
                        isFocus ? colorsPalette.purple.color : 'transparent'
                        : colorsPalette.red.color,
                    backgroundColor: theme === 'light' ? colorsPalette.grey3.color : colorsPalette.black2.color,
                }
            ]}>
                <TextInput
                    ref={textInputRef}
                    style={[
                        styles.textInput,
                        {
                            fontFamily: fontFamily + " Bold",
                            color: theme === 'light' ? colorsPalette.pureBlack.color : colorsPalette.pureWhite.color,
                        },
                    ]}
                    underlineColorAndroid="transparent"
                    placeholder='Search for any word...'
                    placeholderTextColor={theme === 'light' ? colorsPalette.black3LowOpacity.color : colorsPalette.pureWhiteLowOpacity.color}
                    cursorColor={colorsPalette.purple.color}
                    selectionColor={colorsPalette.purple.color}
                    value={text}
                    keyboardType={Platform.OS === 'ios' ? 'web-search' : 'default'}
                    onChangeText={(e) => {
                        setErrorMsg("")
                        onChangeText(e)
                    }}
                    onSubmitEditing={(e) => handleSubmit(e)}
                    onEndEditing={(e) => setIsFocus(false)}
                    onFocus={() => setIsFocus(true)}
                />
                {text === "" ?
                    <Pressable
                        onPress={(e) => handleFocus(e)}
                        style={[styles.icon, globalStyles.flexRowAlignCenter]}>
                        <IconMagnify />
                    </Pressable>
                    :
                    loading ? <ActivityIndicator style={[styles.icon, globalStyles.flexRowAlignCenter]} color={colorsPalette.purple.color} /> :
                        <Pressable
                            onPress={(e) => {
                                handleFocus(e)
                                onChangeText("")
                            }}
                            style={[styles.icon, globalStyles.flexRowAlignCenter]}>
                            <IconCross color={colorsPalette.purple.color} />
                        </Pressable>
                }
            </View>
            {errorMsg !== "" && <Body customStyle={styles.errorMsg} size='S'>{errorMsg}</Body>}
        </>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        borderRadius: 16,
        borderWidth: 1,
        marginTop: 22,
        textDecorationLine: 'none'
    },

    textInput: {
        height: 48,
        paddingLeft: 24,
        flex: 1,
    },

    icon: {
        paddingHorizontal: 24,
        height: "100%"
    },

    errorMsg: {
        color: colorsPalette.red.color,
        paddingTop: 8,
    }
})
