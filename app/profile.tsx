import React from 'react'
import { StyleSheet } from 'react-native'
import { BlurView } from 'expo-blur';

const Profile = () => {


    return (
        <BlurView
            style={styles.container}
            intensity={30}
            tint="light"
        >

        </BlurView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    profilePart: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "5%",
        backgroundColor: "rgba(15, 15, 15, 0.5)",
    },

})