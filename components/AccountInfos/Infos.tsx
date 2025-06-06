import Clipboard from '@react-native-clipboard/clipboard'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ClipboardAsset from '~/assets/Clipboard'

interface InfosProps {
    title: string
    value: string
}


const Infos = ({
    title,
    value
}: InfosProps) => {

    const copyToClipboard = (value: string) => {
        Clipboard.setString(value)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>
                    {value}
                </Text>
                <TouchableOpacity onPress={() => copyToClipboard(value)}>
                    <ClipboardAsset size={18} color='#007AFF' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Infos

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: "#fff",
        marginTop: 20,
        borderRadius: 16,
        gap: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "400",
        color: "#000",
    },
    valueContainer: {
        width: "100%",
        height: "auto",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    value: {
        fontSize: 16,
        color: "#007AFF",
    }
})