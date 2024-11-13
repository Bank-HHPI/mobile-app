import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface NavbarButtonProps {
    children: React.ReactNode
    pathname: string
}

const NavbarButton = ({ children, pathname }: NavbarButtonProps) => {
    return (
        <TouchableOpacity style={styles.navbarbutton} onPress={() => router.push({ pathname: pathname as any })}>
            {children}
        </TouchableOpacity>
    )
}

export default NavbarButton

const styles = StyleSheet.create({
    navbarbutton: {
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#777f89",
        borderRadius: 50,
    },
})