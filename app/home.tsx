import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Balance from '~/components/Home/Balance'
import BottomNavigation from '~/components/Home/BottomNavigation'
import FilterHome from '~/components/Home/FilterHome'
import Navbar from '~/components/Home/Navbar'

const Home = () => {

    const [activeFilter, setActiveFilter] = useState<"account" | "cards">("cards")

    return (
        <View style={styles.container}>
            <Navbar />

            <TextInput
                placeholder="Rechercher"
                style={styles.search}
            />

            <FilterHome
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />

            <Balance amount={"1500.38"} />

            <BottomNavigation />
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