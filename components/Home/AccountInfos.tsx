import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Add from '~/assets/Add'
import BottomArrow from '~/assets/BottomArrow'
import Exchange from '~/assets/Exchange'
//@ts-ignore
import Euro from '~/assets/flags/european_union.svg'
import More from '~/assets/More'

interface AccountInfosProps {
    balance?: number
    currency?: string
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean
}

const AccountInfos = ({
    balance = 0,
    currency = "Euro",
    setShowModal,
    showModal
}: AccountInfosProps) => {

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    const utils = [
        {
            name: "Ajouter",
            icon: <Add color='#4e59ef' size={20} />,
            href: "/deposit"
        },
        {
            name: "Echanger",
            icon: <Exchange color='#4e59ef' size={25} />,
            href: "/accountinfos"
        },
        {
            name: "Plus",
            icon: <More color='#4e59ef' size={20} />,
            href: ""
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerInfos}>
                    <View style={styles.headerInfosBalanceView}>
                        <Text style={styles.headerInfosBalance}>
                            {balance}€
                        </Text>
                        <TouchableOpacity style={styles.headerInfosBalanceButton} onPress={handleShowModal}>
                            <BottomArrow color="#4e59ef" size={25} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.headerInfosTitle}>
                        {currency}
                    </Text>
                </View>

                <View style={styles.headerFlag}>
                    <Euro width={50} height={50} />
                </View>
            </View>

            <View style={styles.utils}>
                {utils.map((util) => (
                    <TouchableOpacity key={util.name} onPress={() => router.push(util.href as any)} style={styles.utilsButton}>
                        <View style={styles.utilsIcon}>
                            {util.icon}
                        </View>
                        <Text style={styles.utilsText}>
                            {util.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default AccountInfos

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        marginTop: 20,
        borderRadius: 16,
    },
    header: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: 20,
    },
    headerInfos: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    headerInfosBalanceView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    headerInfosBalance: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#000",
    },
    headerInfosBalanceButton: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: "#e8effc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    headerInfosTitle: {
        fontSize: 20,
        fontWeight: "400",
        color: "#000",
    },
    headerFlag: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#f7f7f7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    utils: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 20,
    },
    utilsButton: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    utilsIcon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#e8effc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    utilsText: {
        width: 100,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "semibold",
        color: "#000",
    }
})