import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Add from '~/assets/Add'

const AddCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Add />

            </View>
            <Text style={styles.title}>
                Carte
            </Text>

        </View>
    )
}

export default AddCard

const styles = StyleSheet.create({
    container: {
        width: "auto",
        height: "auto",
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 80,
        height: 50,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#1C1C1E",
        marginTop: 10,
    }
})