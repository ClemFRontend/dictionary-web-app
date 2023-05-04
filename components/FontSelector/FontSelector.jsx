import { useState } from 'react'
import { View, StyleSheet, Button, Pressable, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setFont } from '../../features/fontSelectorSlice/fontSelectorSlice'
import { Body } from '../Text/Text'
import { colorsPalette, globalStyles } from '../../style'
import { IconArrowDown } from '../../assets/icons/icons'
import { exitField } from '../../services/utils/common'

export default function FontSelector() {

    const dispatch = useDispatch()
    const fontFamily = useSelector(state => state.font.value)
    const fonts = ["Sans Serif", "Serif", "Mono"]
    const [isOpen, setIsOpen] = useState(false)
    const theme = useSelector(state => state.theme.value)

    function handleChangeFont(font) {
        dispatch(setFont(font))
        setIsOpen(false)
    }

    function handleOpen(e) {
        exitField()
        setIsOpen(!isOpen)
    }

    return (
        <View>
            <Pressable style={[globalStyles.flexRowAlignCenter, { paddingVertical: 6 }]} onPress={handleOpen}>
                <Body size='S' bold>{fontFamily}</Body>
                <IconArrowDown style={[{
                    transform: [
                        { rotate: isOpen ? '180deg' : "0deg" }
                    ]
                }, styles.iconArrow]} />
            </Pressable>
            {isOpen &&
                <View style={[
                    styles.modal,
                    { backgroundColor: theme === 'light' ? colorsPalette.pureWhite.color : colorsPalette.black1.color },
                    styles.shadow,
                    {
                        shadowColor: theme === 'light' ? colorsPalette.pureBlack.color : colorsPalette.purple.color,
                        shadowOpacity: theme === 'light' ? 0.1 : 1,
                    }
                ]}>
                    {fonts.map((font) => {
                        return (
                            <Pressable key={font} onPress={() => handleChangeFont(font)}>
                                <Body customStyle={{ fontFamily: font + " Bold", paddingVertical: 5, }} size='S'>{font}</Body>
                            </Pressable>
                        )
                    })}
                </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        borderRadius: 16,
        width: 150,
        paddingLeft: 24,
        paddingVertical: 12,
        position: 'absolute',
        marginTop: 30,
        right: 0,
    },

    shadow: {
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 30
    },
    iconArrow: {
        marginHorizontal: 16,
    },
})

