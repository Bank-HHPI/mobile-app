import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HomeIcon from '~/assets/HomeIcon'

const BottomNavigation = () => {

    const [activePage, setActivePage] = useState<"home" | "transfer" | "save">("home")

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setActivePage("home")}
                style={styles.navbarButton}
            >
                <Text style={styles.navbarbuttonText}>Home</Text>
                <HomeIcon size={30} color={activePage === "home" ? "#000" : "737a86"} />
            </TouchableOpacity>

        </View>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    navbarButton: {
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center",
    },
    navbarbuttonText: {
        fontSize: 18,
        fontWeight: "semibold",
        color: "#000",
    },
})