import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { TouchableOpacityProps } from 'react-native-gesture-handler'

interface FilterProps extends TouchableOpacityProps {
    variant: "active" | "inactive"
}

const Filter = ({
    variant,
    children,
    ...props
}: FilterProps) => {
    return (
        <TouchableOpacity style={[styles.container, styles[variant]]} {...props}>
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
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontWeight: "semibold",
        fontSize: 20,
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