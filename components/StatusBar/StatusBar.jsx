import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { colorsPalette } from '../../style';

export default function StatusBar() {

    const theme = useSelector(state => state.theme.value)

    return (
        <ExpoStatusBar
            backgroundColor={theme === 'light' ? colorsPalette.pureWhite.color : colorsPalette.black1.color}
            style={theme === 'light' ? 'dark' : 'light'}
        />
    )
}