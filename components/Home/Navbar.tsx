import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '~/assets/Card'
import NavbarButton from './NavbarButton'

const Navbar = () => {
    return (
        <View style={styles.container}>
            <NavbarButton pathname="/profile">
                <Text style={styles.navbarbuttonText}>H</Text>
            </NavbarButton>

            <Text style={styles.navbarTitle}>HHPI Bank</Text>

            <NavbarButton pathname="/card">
                <Card size={25} color='#fff' />
            </NavbarButton>

        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    navbarbuttonText: {
        fontSize: 18,
        fontWeight: "semibold",
        color: "#fff",
    },
    navbarTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
})