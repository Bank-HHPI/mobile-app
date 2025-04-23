import { useAtomValue } from 'jotai'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import AccountInfos from '~/components/Home/AccountInfos'
import BottomNavigation from '~/components/Home/BottomNavigation'
import Cards from '~/components/Home/Cards'
import LastTransactions from '~/components/Home/LastTransactions'
import Modal from '~/components/Home/Modal'
import Navbar from '~/components/Home/Navbar'
import { accessTokenAtom } from './atom/access_token'

const Home = () => {

    const [showModal, setShowModal] = useState<boolean>(false)
    const access_token = useAtomValue(accessTokenAtom)


    return (
        <View style={styles.container}>
            <Navbar />

            <TextInput
                placeholder="Rechercher"
                style={styles.search}
            />

            <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
                <AccountInfos
                    balance={1500}
                    setShowModal={setShowModal}
                    showModal={showModal}
                />
                <LastTransactions />
                <Cards />
            </ScrollView>
            <BottomNavigation />

            {showModal && <Modal setShowModal={setShowModal} />}
        </View>
    )
}

export default Home

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#f7f7f7",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: 100,
        position: "relative",
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
    }
})