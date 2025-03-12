import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Transaction from '../Transaction'

const LastTransactions = () => {

    const [limit, setLimit] = useState<number>(2)

    const handleTransactionClick = () => {
        if (limit === 2) {
            setLimit(transactions.length)
        } else {
            setLimit(2)
        }
    }

    const transactions = [
        {
            amount: "-100.00",
            date: "12/12/2020",
            company: "Amazon"
        },
        {
            amount: "-30.00",
            date: "12/12/2020",
            company: "Netflix"
        },
        {
            amount: "-100.00",
            date: "12/12/2020",
            company: "Amazon"
        }
    ]

    return (
        <View style={styles.container}>
            {
                transactions.slice(0, limit).map((transaction, index) => (
                    <Transaction
                        key={index}
                        amount={transaction.amount}
                        date={transaction.date}
                        company={transaction.company}
                    />
                ))
            }

            <TouchableOpacity style={styles.seeMoreButton} onPress={handleTransactionClick}>
                <Text style={styles.seeMoreText}>
                    Voir {limit === 2 ? "plus" : "moins"}
                </Text>
            </TouchableOpacity>
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
        borderRadius: 16,
        paddingVertical: 20,
        gap: 15,
    },
    seeMoreButton: {
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        borderRadius: 50,
    },
    seeMoreText: {
        color: "#4e59ef",
        fontSize: 16,
        fontWeight: "500",
    }
})