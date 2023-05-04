import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home/Home';
import { useSelector } from 'react-redux';
import { colorsPalette } from '../../style';

const Stack = createNativeStackNavigator();

export function Navigation() {

    const theme = useSelector(state => state.theme.value)

    return (
        <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                contentStyle: { backgroundColor: theme === 'light' ? colorsPalette.pureWhite.color : colorsPalette.black1.color },
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false, }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({

})
