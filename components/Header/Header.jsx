import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { colorsPalette, globalStyles } from '../../style.js'
import FontSelector from '../FontSelector/FontSelector.jsx'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx'
import { Logo } from '../../assets/icons/icons.js'

export default function Header() {
    return (
        <View style={[
            styles.header,
            globalStyles.flexRowAlignCenter,
            styles.safeArea,
        ]}>
            <Logo />
            <View style={globalStyles.flexRowAlignCenter}>
                <FontSelector />
                <View style={styles.verticalSeparator} />
                <ThemeSwitcher />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        zIndex: 1,
    },

    safeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight - 5 : 5
    },
    verticalSeparator: {
        borderColor: colorsPalette.grey2.color,
        borderWidth: 0.7,
        height: 32,
    }
})
