import { StyleSheet, View, Platform } from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import Header from '../../components/Header/Header.jsx';
import { useState } from 'react';
import Constants from 'expo-constants';
import NoDefFound from '../../components/NoDefFound/NoDefFound.jsx';
import WordDef from '../../components/WordDef/WordDef.jsx';
import { globalStyles } from '../../style.js';

export default function Home() {

    const statusBarHeight = Constants.statusBarHeight
    const [data, setData] = useState({})

    return (
        <View style={[
            styles.container,
            { paddingTop: Platform.OS === 'ios' ? statusBarHeight : 0 }
        ]}>
            <View style={[globalStyles.screenBorderMargin, { zIndex: 1 }]}>
                <Header />
                <SearchBar setData={setData} />
            </View>
            {data.title === "No Definitions Found" ? <NoDefFound data={data} /> : <WordDef data={data} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
