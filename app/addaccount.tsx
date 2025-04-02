import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Add from '~/assets/Add'
import CountryAccount from '~/components/CountryAccount'
import { accountsTypes } from '~/constantes/AccountsTypes'

const AddAccount = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerButton}>
                    <Add size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Ajouter un compte</Text>
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <TextInput
                    placeholder="Rechercher"
                    style={styles.search}
                />
                <View style={styles.contriesList}>
                    {accountsTypes.map((accountType, index) => (
                        <CountryAccount
                            key={index}
                            title={accountType.title}
                            currency={accountType.currency}
                            country={accountType.country}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default AddAccount

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#f7f7f7",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: 50,
        gap: 20,
    },
    header: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
    },
    headerButton: {
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: [{ rotate: "45deg" }],
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "600",
        color: "#000",
    },
    scrollView: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
    },
    search: {
        width: "100%",
        height: 40,
        backgroundColor: "#edeff2",
        borderRadius: 50,
        paddingLeft: 20,
        color: "#777f89",
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 20,
    },
    contriesList: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20,
        backgroundColor: "#fff",
        borderRadius: 16,
    }
})