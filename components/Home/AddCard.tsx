import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Add from '~/assets/Add'
import { router } from 'expo-router'

const AddCard = () => {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => router.push('/getCard')}
        >
            <View style={styles.card}>
                <Add />
            </View>
            <Text style={styles.title}>
                Carte
            </Text>
        </TouchableOpacity>
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