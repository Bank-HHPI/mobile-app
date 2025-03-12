import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
    variant: 'blue' | 'blue-disabled' | 'black' | 'white' | 'dark'
    disabled?: boolean
    width?: number | string
}


const Button = ({
    variant,
    disabled,
    width = "auto",
    children,
    ...props
}: ButtonProps) => {

    const buttonStyles: { [key in ButtonProps['variant']]: keyof typeof styles } = {
        'blue': "blueButton",
        'blue-disabled': "blueButtonDisabled",
        'black': "blackButton",
        "dark": "darkButton",
        'white': "whiteButton",
    }

    const textStyles: { [key in ButtonProps['variant']]: keyof typeof styles } = {
        'blue': "blueText",
        'blue-disabled': "blueTextDisabled",
        'black': "blackText",
        "dark": "darkText",
        'white': "whiteText",
    }

    return (
        // @ts-ignore
        <TouchableOpacity {...props} disabled={disabled} style={[styles.buttonStyle, styles[buttonStyles[variant]], { width: width }]}>
            <Text style={[styles.text, styles[textStyles[variant]]]}>{children}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonStyle: {
        display: "flex",
        flexDirection: "row",
        gap: 15,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30
    },
    blackButton: {
        backgroundColor: '#191a1f',
    },
    blueButton: {
        backgroundColor: "#2c64e3"
    },
    darkButton: {
        backgroundColor: "#000"
    },
    blueButtonDisabled: {
        backgroundColor: "#2c64e3",
        opacity: 0.4
    },
    whiteButton: {
        backgroundColor: '#fff',
    },
    text:{
        fontSize: 18,
    },
    blueText: {
        color: "#fff"
    },
    blueTextDisabled: {
        color: "#fff"
    },
    blackText: {
        color: "#fff"
    },
    whiteText: {
        color: "#000"
    },
    darkText: {
        color: "#fff"
    }
})