import React from 'react'
import { StyleSheet, View } from 'react-native'
import Navbar from '~/components/Navbar'

const Home = () => {
    return (
        <View style={styles.container}>
            <Navbar />
        </View>
    )
}

export default Home

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#f7f7f7"
    }
})