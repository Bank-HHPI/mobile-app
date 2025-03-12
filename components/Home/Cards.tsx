import React from 'react'
import { StyleSheet, View } from 'react-native'
import Card from './Card'
import AddCard from './AddCard'

const Cards = () => {
    return (
        <View style={styles.container}>
            <Card color='f27c96' />
            <Card color='737275' />
            <AddCard />
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#fff",
        marginTop: 20,
        borderRadius: 16,
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 25,
    },
})