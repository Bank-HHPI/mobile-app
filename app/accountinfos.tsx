import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BackButton from '~/components/BackButton'

interface AccountInfosProps {
    accountInfos: {
        rib: string
        bic: string
        beneficiary: string
        address: string
    }
}

const accountInfos = ({
    accountInfos
}: AccountInfosProps) => {
    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.title}>
                Informations du compte
            </Text>
        </View>
    )
}

export default accountInfos

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: "#f7f7f7",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: 100,
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#000",
        marginTop: 10,
    }
})