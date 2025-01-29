import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Transaction from '../Transaction'

const LastTransactions = () => {
    return (
        <View style={styles.container}>
            <Transaction
                amount="-100.00"
                date="12/12/2020"
                company="Amazon"
            />

            <Transaction
                amount="-30.00"
                date="12/12/2020"
                company="Netflix"
            />
        </View>
    )
}

export default LastTransactions

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        marginTop: 20,
        borderRadius: 12,
        paddingVertical: 20,
        gap: 15,
    },
})