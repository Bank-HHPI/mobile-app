import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

interface DefaultLayoutProps extends ViewProps {
    black?: boolean
}

const DefaultLayout = ({
    black = false,
    children,
    style,
    ...props
}: DefaultLayoutProps) => {
    return (
        <View {...props} style={[styles.container, { backgroundColor: black ? "#000" : "#fff" }, style]}>
            {children}
        </View>
    )
}

export default DefaultLayout

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingLeft: "5%",
        paddingRight: "5%",
        alignItems: 'center',
    },
})