import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface BalanceProps {
    amount: string
}

const Balance = ({
    amount
}: BalanceProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.balanceAccountTitle}>
                HHPI-Bank
            </Text>
            <Text style={styles.balanceAmount}>
                {amount} €
            </Text>
        </View>
    )
}

export default Balance

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    balanceAccountTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#777f89",
    },
    balanceAmount: {
        fontSize: 40,
        fontWeight: "bold",
    },
})