import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import LeftArrow from '~/assets/LeftArrow'

const BackButton = () => {
    return (
        <TouchableOpacity onPress={router.back} style={styles.container}>
            <LeftArrow size={40} color='#000' />
        </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        width: "auto",
        height: "auto",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
})