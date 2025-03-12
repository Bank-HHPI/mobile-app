import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface CardProps {
    color: string
}

const Card = ({
    color
}: CardProps) => {
    return (
        <View style={styles.container}>
            <View style={[styles.card, { backgroundColor: `#${color}` }]}>

            </View>
            <Text style={styles.title}>
                Carte
            </Text>

        </View>
    )
}

export default Card

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
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#1C1C1E",
        marginTop: 10,
    }
})