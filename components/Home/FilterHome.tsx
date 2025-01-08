import React from 'react'
import { StyleSheet, View } from 'react-native'
import Filter from './Filter'

interface FilterHomeProps {
    activeFilter: "account" | "cards"
    setActiveFilter: (filter: "account" | "cards") => void
}

const FilterHome = ({
    activeFilter,
    setActiveFilter
}: FilterHomeProps) => {
    return (
        <View style={styles.container}>
            <Filter
                variant={activeFilter === "account" ? "active" : "inactive"}
                onPress={() => setActiveFilter("account")}
            >
                Comptes
            </Filter>

            <Filter
                variant={activeFilter === "cards" ? "active" : "inactive"}
                onPress={() => setActiveFilter("cards")}
            >
                Cartes
            </Filter>


        </View>
    )
}

export default FilterHome

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        gap: 20,
    },
})