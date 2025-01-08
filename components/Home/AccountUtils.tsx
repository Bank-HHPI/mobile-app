import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AccountUtils = () => {

    const utils = [
        {
            name: "Approvisionner",
            href: "/deposit"
        },
        {
            name: "Informations",
            href: "/accountinfos"
        },
        {
            name: "Ajouter un compte",
            href: "/addaccount"
        }
    ]

    return (
        <View style={styles.container}>
            {utils.map((util) => (
                <TouchableOpacity key={util.name} onPress={() => router.push({ pathname: util.href as any })}>
                    <View style={styles.utilsIcon}>

                    </View>
                    <Text style={styles.utilsText}>
                        {util.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default AccountUtils

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    utilsIcon: {
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    utilsText: {
        width: 100,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "semibold",
    },
})