import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Infos from '~/components/AccountInfos/Infos'
import BackButton from '~/components/BackButton'

interface AccountInfosProps {
    accountInfos: {
        rib: string
        bic: string
        beneficiary: string
        address: string
    }
}

const accountInfos = () => {

    const accountInfos = {
        beneficiary: "John Doe",
        iban: "FR76 3000 3000 3000 3000 3000 3000 300",
        bic: "BNPAFRPPXXX",
        address: "5 rue de la paix, 75000 Paris"
    }

    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.title}>
                Informations du compte
            </Text>

            <View style={styles.accountInfos}>
                <Text style={styles.accountInfosTitle}>
                    Virements nationaux
                </Text>
                <Infos
                    title="Bénéficiaire"
                    value={accountInfos.beneficiary}
                />
            </View>
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
    },
    accountInfos: {
        width: "100%",
        height: "auto",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: "#fff",
        marginTop: 20,
        borderRadius: 16,
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 25,
    },
    accountInfosTitle: {
        fontSize: 20,
        fontWeight: "400",
        color: "#000",
    }
})