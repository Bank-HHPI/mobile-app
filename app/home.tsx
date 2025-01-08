import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import FilterHome from '~/components/FilterHome'
import Navbar from '~/components/Navbar'

const Home = () => {

    const [activeFilter, setActiveFilter] = useState<"account" | "cards">("account")

    return (
        <View style={styles.container}>
            <Navbar />

            <TextInput
                placeholder="Rechercher"
                style={{
                    width: "100%",
                    height: 40,
                    backgroundColor: "#edeff2",
                    borderRadius: 50,
                    paddingLeft: 20,
                    color: "#777f89",
                    fontSize: 16,
                    fontWeight: "500",
                }}
            />

            <FilterHome
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />


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
    }
})