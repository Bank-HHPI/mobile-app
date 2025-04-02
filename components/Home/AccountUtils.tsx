import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Add from '~/assets/Add'
import Details from '~/assets/Details'
import Euro from '~/assets/Euro'

interface AccountUtilsProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AccountUtils = ({
    setShowModal
}: AccountUtilsProps) => {

    const utils = [
        {
            name: "Ajouter",
            icon: <Euro color='#ebebed' size={80} />,
            href: "/deposit"
        },
        {
            name: "Informations",
            icon: <Details color='#000' size={90} />,
            href: "/accountinfos"
        },
        {
            name: "Comptes",
            icon: <Add color='#ebebed' size={80} />,
            href: "/addaccount"
        }
    ]

    return (
        <View style={styles.container}>
            {utils.map((util) => (
                <TouchableOpacity key={util.name} onPress={() => router.push({ pathname: util.href as any })} style={styles.utils}>
                    {util.icon}
                    <Text style={styles.utilsText}>
                        {util.name}
                    </Text>
                </TouchableOpacity>
            ))
            }
        </View >
    )
}

export default AccountUtils

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    utils: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    utilsText: {
        width: 100,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "semibold",
    },
})