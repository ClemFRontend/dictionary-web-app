import { Linking, ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { Body, Heading } from '../Text/Text.jsx'
import { IconNewWindow } from '../../assets/icons/icons.js'
import PlaySound from '../PlaySound/PlaySound'
import { colorsPalette, globalStyles } from '../../style.js'
import { useSelector } from 'react-redux'
import { exitField } from '../../services/utils/common.jsx'
import { useRef } from 'react'

export default function WordDef({ data }) {

    const theme = useSelector(state => state.theme)
    const scrollViewRef = useRef()

    // Reset scroll position when re-render
    try {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true })
    } catch (error) {

    }

    return (
        <ScrollView ref={scrollViewRef} contentContainerStyle={{ paddingBottom: 50 }}>
            <TouchableWithoutFeedback onPress={() => exitField()} touchSoundDisabled>
                <View style={globalStyles.screenBorderMargin}>
                    {Object.keys(data).length !== 0 &&
                        <>
                            <View style={styles.titleContainer}>
                                <View>
                                    <Heading bold size='L'>{data.word}</Heading>
                                    {data.phonetic !== undefined && <Heading customStyle={styles.phonetic} size='M'>{data.phonetic}</Heading>}
                                </View>
                                <PlaySound audios={data.audios} />
                            </View>
                            {data.meanings.map((m, i) => {
                                return (
                                    <View key={`meaning-${i}`}>
                                        <View style={[styles.partOfSpeech, globalStyles.flexRowAlignCenter]}>
                                            <Heading bold size='M'>{m.partOfSpeech}</Heading>
                                            <View style={[
                                                styles.line,
                                                {
                                                    borderColor: theme === 'light' ? colorsPalette.grey2.color : colorsPalette.black4.color,
                                                    marginLeft: 20,
                                                }
                                            ]} />
                                        </View>
                                        <Heading customStyle={styles.meaningW} size='S'>Meaning</Heading>
                                        {m.definitions.map((d, i) => {
                                            return (
                                                <View key={`meaning-${i}`}>
                                                    <View style={styles.definition}>
                                                        <View style={styles.dot} />
                                                        <Body selectable customStyle={{ marginLeft: 20 }} size='M' key={d}>{d.definition}</Body>
                                                    </View>
                                                    {"example" in d && <Body selectable size='M' customStyle={styles.example}>“{d.example}”</Body>}
                                                </View>
                                            )
                                        })}
                                        {m.synonyms.length !== 0 && <>
                                            <View style={styles.synonymsContainer}>
                                                <Heading customStyle={colorsPalette.grey1} size='S'>Synonyms</Heading>
                                                <View style={styles.synonyms}>
                                                    {m.synonyms.map((s, i) => {
                                                        return (
                                                            <Heading key={s} customStyle={styles.synonym} bold size='S'>
                                                                {s}{i === m.synonyms.length - 1 ? "" : ","}
                                                            </Heading>
                                                        )
                                                    })}
                                                </View>
                                            </View>
                                        </>}
                                    </View>
                                )
                            })}
                            <View style={[
                                styles.line,
                                {
                                    borderColor: theme === 'light' ? colorsPalette.grey2.color : colorsPalette.black4.color,
                                    marginTop: 32,
                                },
                            ]} />
                            <View style={styles.source}>
                                <Body underline size='S' customStyle={styles.sourceW}>Source</Body>
                                {data.sourceUrls.map((u, i) => {
                                    return (
                                        <View key={`url-${i}`} style={styles.sources}>
                                            <TouchableOpacity onPress={() => Linking.openURL(`${u}`)}>
                                                <Body customStyle={{ marginTop: 8 }} underline size='S'>{u}</Body>
                                            </TouchableOpacity>
                                            <IconNewWindow style={styles.iconNewWindow} />
                                        </View>
                                    )
                                })}
                            </View>
                        </>
                    }
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
    },
    circle: {
        width: 48,
        height: 48,
        opacity: 0.25,
        backgroundColor: colorsPalette.purple.color,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center', alignItems: 'center',
    },
    phonetic: {
        color: colorsPalette.purple.color,
        marginTop: 8,
    },
    partOfSpeech: {
        marginTop: 32,
    },
    line: {
        borderWidth: 0.8,
        flex: 1,
    },
    meaningW: {
        marginTop: 32,
        marginBottom: 4,
        color: colorsPalette.grey1.color,
    },
    definition: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 13,
    },
    example: {
        marginLeft: 25,
        marginTop: 13,
        color: colorsPalette.grey1.color,
    },
    dot: {
        height: 5,
        width: 5,
        borderRadius: 20,
        backgroundColor: colorsPalette.purple.color,
        marginTop: 10,
    },
    synonymsContainer: {
        marginTop: 24,
        display: 'flex',
        flexDirection: 'row'
    },
    synonyms: {
        marginLeft: 24,
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        flex: 1,
    },
    synonym: {
        marginRight: 8,
        color: colorsPalette.purple.color,
    },
    sources: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "flex-end",
    },
    sourceW: {
        marginTop: 19,
        color: colorsPalette.grey1.color,
    },
    iconNewWindow: {
        marginLeft: 9,
        marginBottom: 1
    }
})
