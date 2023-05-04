import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Body, Heading } from '../Text/Text'
import { exitField } from '../../services/utils/common'
import { colorsPalette } from '../../style'

export default function NoDefFound({ data }) {

    return (
        <TouchableWithoutFeedback onPress={() => exitField()}>
            <View style={styles.container}>
                <Image
                    style={styles.emoticonNotFound}
                    source={require('../../assets/images/emoticon-not-found.png')}
                />
                <Heading customStyle={styles.heading} size='S' bold>{data.title}</Heading>
                <Body customStyle={styles.body} size='M'>{data.message} {data.resolution}</Body>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        marginHorizontal: 24,
        marginTop: 50,
    },
    emoticonNotFound: {
        width: 45,
        height: 45,
    },
    heading: {
        marginTop: 20,
    },
    body: {
        textAlign: 'center',
        marginTop: 15,
        color: colorsPalette.grey1.color,
    },
})
