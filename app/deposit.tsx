import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LeftArrow from '~/assets/LeftArrow'
import Input from '~/components/Transfer/Input'

const Deposit = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <LeftArrow size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>
                    Ajouter de l'argent
                </Text>
            </View>

            <View style={styles.content}>
                <Input label="Montant à ajouter" />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Transférer
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Deposit

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#f7f7f7",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: 20,
        position: "relative",
    },
    header: {
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    backButton: {
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: "#000",
    },
    content: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20,
        marginTop: 20,
    },
    button: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        height: 50,
        backgroundColor: "#007AFF",
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
    },
})