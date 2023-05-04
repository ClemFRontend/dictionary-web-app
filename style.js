import { StyleSheet } from "react-native";

export const colorsPalette = StyleSheet.create({
    purple: {
        color: "#A445ED"
    },
    red: {
        color: "#FF5252"
    },
    grey1: {
        color: "#757575"
    },
    grey2: {
        color: "#E9E9E9"
    },
    grey3: {
        color: "#F4F4F4"
    },
    grey4: {
        color: "#575757"
    },
    pureWhite: {
        color: "#fff"
    },
    pureWhiteLowOpacity: {
        color: 'rgba(255, 255, 255, 0.25)'
    },
    pureBlack: {
        color: "#000"
    },
    black1: {
        color: "#050505"
    },
    black2: {
        color: "#1F1F1F"
    },
    black3: {
        color: "#2D2D2D"
    },
    black4: {
        color: "#3A3A3A"
    },
    black3LowOpacity: {
        color: 'rgba(45, 45, 45, 0.25)'
    },
})

export const globalStyles = StyleSheet.create({
    center: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    debugBorder: {
        borderWidth: 1,
        borderColor: 'red',
    },
    flexRowAlignCenter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    screenBorderMargin: {
        marginHorizontal: 24,
    }
})