import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface InputProps {
    label: string;
    onChangeText?: (text: string) => void;
    value?: string;
}

const Input = ({
    label,
    onChangeText = () => { },
    value = "",
}: InputProps) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#edeff2",
        borderRadius: 10,
        padding: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "500",
        color: "#737a86",
    },
    input: {
        width: "100%",
        height: 30,
        borderRadius: 10,
        paddingLeft: 20,
        color: "#000",
        fontSize: 16,
        fontWeight: "500",
    }
})