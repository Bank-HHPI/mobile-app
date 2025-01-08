import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
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
            <Text style={[styles.filterText, styles[variant]]}>
                {children}
            </Text>
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
    filterText: {
        fontSize: 16,
        fontWeight: "500",
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