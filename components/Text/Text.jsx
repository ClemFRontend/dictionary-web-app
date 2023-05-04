import { Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { colorsPalette } from '../../style'

export function Heading({ size = "L", customStyle, underline = false, italic = false, bold = false, children }) {
    const fontFamily = useSelector(state => bold ? state.font.value + " Bold" : state.font.value)
    const theme = useSelector(state => state.theme.value)

    // Create error if size not existing
    const sizes = ['L', 'M', 'S']
    if (!sizes.includes(size.toUpperCase())) {
        throw new Error("Size of Heading must be L, M or S.")
    }

    let headingStyle = ""
    switch (size.toUpperCase()) {
        case 'L':
            headingStyle = styles.headingL
            break;

        case 'M':
            headingStyle = styles.headingM
            break;

        case 'S':
            headingStyle = styles.headingS
            break;
        default:
            break;
    }

    return (
        <Text style={[
            styles.heading,
            headingStyle,
            {
                fontFamily: fontFamily,
                color: theme === 'light' ? colorsPalette.black3.color : colorsPalette.pureWhite.color
            },
            italic && styles.italic,
            underline && styles.underline,
            customStyle,
        ]}>
            {children}
        </Text>
    )
}

export function Body({ size = "M", customStyle, underline = false, italic = false, bold = false, children, ...props }) {
    const fontFamily = useSelector(state => bold ? state.font.value + " Bold" : state.font.value)
    const theme = useSelector(state => state.theme.value)

    // Create error if size not existing
    const sizes = ['M', 'S']
    if (!sizes.includes(size.toUpperCase())) {
        throw new Error("Size of Heading must be M or S.")
    }

    let bodyStyle = ""
    switch (size.toUpperCase()) {
        case 'M':
            bodyStyle = styles.bodyM
            break;

        case 'S':
            bodyStyle = styles.bodyS
            break;
        default:
            break;
    }

    return (
        <Text
            style={[
                styles.body,
                bodyStyle,
                {
                    fontFamily: fontFamily,
                    color: theme === 'light' ? colorsPalette.black3.color : colorsPalette.pureWhite.color
                },
                italic && styles.italic,
                underline && styles.underline,
                customStyle,
            ]}
            {...props}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    heading: {

    },
    headingL: {
        fontSize: 32,
        lineHeight: 39,
    },
    headingM: {
        fontSize: 18,
        lineHeight: 24,
    },
    headingS: {
        fontSize: 16,
        lineHeight: 19,
    },

    body: {

    },
    bodyM: {
        fontSize: 15,
        lineHeight: 24,
    },
    bodyS: {
        fontSize: 14,
        lineHeight: 17,
    },

    italic: {
        fontStyle: 'italic'
    },
    underline: {
        textDecorationLine: 'underline'
    }

})
