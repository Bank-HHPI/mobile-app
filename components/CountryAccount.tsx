import React from 'react'
import { StyleSheet, View } from 'react-native'

interface CountryAccountProps {
    country: React.ReactNode
    title: string
    currency: string
}

const CountryAccount = ({
    country,
    title,
    currency
}: CountryAccountProps) => {

    return (
        <View style={styles.container}>
            {country}

        </View>
    )
}

export default CountryAccount

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
    },
})