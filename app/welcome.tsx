import { router } from "expo-router"
import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

import Button from "~/components/Button"
import DefaultLayout from "~/components/DefaultLayout"

const Welcome = () => {
    return (
        <DefaultLayout black style={styles.container}>
            <View style={styles.top}>
                <Image source={require("../assets/logo.png")} style={styles.image} />
                <Text style={styles.topTitle}>Bienvenue sur HHPI Bank</Text>
            </View>

            <Text style={styles.title}>Gérer son argent avec HHPI devient facile</Text>

            <View style={styles.bottom}>
                <Button variant="black" width="47%" onPress={() => router.push({pathname: "/login"})}>
                    Connexion
                </Button>

                <Button variant="white" width="47%" onPress={() => router.push({pathname: "/signup"})}>
                    Inscription
                </Button>
            </View>

        </DefaultLayout>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        position: "relative",
        paddingTop: 50,
    },
    top: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
    },
    topTitle: {
        color: "#fff",
        fontSize: 22,
    },
    image: {
        width: 50,
        height: 50,
    },
    title: {
        width: "100%",
        color: "#fff",
        fontSize: 36,
        fontWeight: "bold",
        marginTop: 20,
    },
    bottom: {
        position: "absolute",
        bottom: 30,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 20,
    },
})
