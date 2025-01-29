import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Card from '~/assets/Card'
import HomeIcon from '~/assets/HomeIcon'
import Save from '~/assets/Save'

const BottomNavigation = () => {

    const [activePage, setActivePage] = useState<"home" | "transfer" | "save">("home")

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setActivePage("home")}
                style={styles.navbarButton}
            >
                <Text style={styles.navbarbuttonText}>
                    Accueil
                </Text>
                <HomeIcon size={30} color={activePage === "home" ? "#007AFF" : "#777777"} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setActivePage("transfer")}
                style={styles.navbarButton}
            >
                <Text style={styles.navbarbuttonText}>
                    Paiement
                </Text>
                <Card size={30} color={activePage === "transfer" ? "#007AFF" : "#777777"} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setActivePage("save")}
                style={styles.navbarButton}
            >
                <Text style={styles.navbarbuttonText}>
                    Epargne
                </Text>
                <Save size={30} color={activePage === "save" ? "#007AFF" : "#777777"} />
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