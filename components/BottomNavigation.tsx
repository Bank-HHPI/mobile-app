import React from 'react'
import { StyleSheet, View } from 'react-native'

const BottomNavigation = () => {
    return (
        <View style={styles.container}>
        </View>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
    }
})