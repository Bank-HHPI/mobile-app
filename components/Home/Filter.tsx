import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TouchableOpacityProps } from 'react-native-gesture-handler'

interface FilterProps extends TouchableOpacityProps {
    variant: "active" | "inactive"
}

const Filter = ({
    variant,
    children
}: FilterProps) => {
    return (
        <TouchableOpacity style={[styles.container, styles[variant]]}>
            {children}
        </TouchableOpacity >
    )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        width: "auto",
        height: "auto",
        borderRadius: 50,
        paddingHorizontal: 8,
        paddingVertical: 4,
        fontWeight: "semibold",
    },
    active: {
        backgroundColor: "#fff",
        color: "#000",
    },
    inactive: {
        backgroundColor: "transparent",
        color: "#737a86",
    }
})