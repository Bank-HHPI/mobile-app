import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CountryAccountProps {
    country: React.ReactNode;
    title: string;
    currency: string;
    onPress?: () => void; // Assure-toi que `onPress` est bien une fonction optionnelle
}

const CountryAccount = ({
    country,
    title,
    currency,
    onPress
}: CountryAccountProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.country}>
                {country}
            </View>
            <View style={styles.infos}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.currencyText}>{currency}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CountryAccount;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    country: {
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    infos: {
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: 20,
    },
    titleText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000",
    },
    currencyText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#737a86",
    }
});
