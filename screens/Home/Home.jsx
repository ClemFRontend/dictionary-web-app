import { StyleSheet, View, Platform } from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import Header from '../../components/Header/Header';
import { useState } from 'react';
import Constants from 'expo-constants';
import NoDefFound from '../../components/NoDefFound/NoDefFound';
import WordDef from '../../components/WordDef/WordDef';
import { globalStyles } from '../../style';

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
