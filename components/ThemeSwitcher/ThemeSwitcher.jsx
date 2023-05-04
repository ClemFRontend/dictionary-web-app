import { View, StyleSheet, Switch, Platform } from 'react-native'
import { colorsPalette, globalStyles } from '../../style'
import { IconMoon } from '../../assets/icons/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../features/themeSwitcherSlice/themeSwitcherSlice'
import { Appearance, useColorScheme } from 'react-native';
import { useEffect } from 'react'
import { exitField } from '../../services/utils/common'

export function ThemeSwitcher() {

    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.value)
    const colorScheme = useColorScheme();

    useEffect(() => {
        dispatch(setTheme(colorScheme))
    }, [])

    return (
        <View style={globalStyles.flexRowAlignCenter}>
            <Switch
                style={styles.switch}
                trackColor={{ false: colorsPalette.grey1.color, true: colorsPalette.purple.color }}
                thumbColor="white"
                ios_backgroundColor={colorsPalette.grey1.color}
                onValueChange={() => {
                    exitField()
                    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
                }}
                value={theme === 'light' ? false : true}
            />
            <IconMoon color={theme === 'dark' ? colorsPalette.purple.color : colorsPalette.grey1.color} />
        </View>
    )
}

const styles = StyleSheet.create({
    switch: {
        marginLeft: Platform.OS === 'android' ? 20 : 26,
        marginRight: Platform.OS === 'android' ? 15 : 20,
    }
})

export default ThemeSwitcher
