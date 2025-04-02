import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface TransactionProps {
    amount: string
    date: string
    company: string
}

const Transaction = ({
    amount,
    date,
    company
}: TransactionProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.company}>
                <Text style={styles.companyText}>
                    {company.charAt(0).toUpperCase()}
                </Text>
            </View>

            <View style={styles.details}>
                <Text style={styles.companyName}>
                    {company}
                </Text>
                <Text style={styles.date}>
                    {date}
                </Text>
            </View>

            <Text style={styles.amount}>
                {amount}€
            </Text>
        </View>
    )
}

export default Transaction

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingLeft: 20,
        gap: 10,
    },
    company: {
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4e59ef",
        borderRadius: 50,
    },
    companyText: {
        color: "#fff",
        fontWeight: "semibold",
        fontSize: 20,
    },
    details: {
        display: "flex",
        flexDirection: "column",
        gap: 7,
    },
    companyName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    date: {
        fontSize: 14,
        color: "#777f89",
    },
    amount: {
        position: "absolute",
        right: 20,
        fontSize: 18,
        fontWeight: "bold",
    },
})