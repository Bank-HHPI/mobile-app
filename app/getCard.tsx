import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function GetCardScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Bouton Retour */}
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                {/*<Text style={styles.backText}>←</Text>*/}
            </TouchableOpacity>

            {/* Titre */}
            <Text style={styles.header}>Get a card</Text>

            {/* Carte Physique */}
            <TouchableOpacity
                style={styles.cardContainer}
                onPress={() => router.push('confirmAddress')} // Navigation vers la page de confirmation d'adresse
            >
                <View style={styles.cardContent}>
                    <View style={styles.icon}>
                        <Text style={styles.iconText}>⊖</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Physical debit card</Text>
                        <Text style={styles.cardDescription}>
                            Choose your card design or personalise it, and get it delivered
                        </Text>
                    </View>
                    {/* <Image source={require('../assets/physical-card.png')} style={styles.cardImage} /> */}
                </View>
            </TouchableOpacity>

            {/* Carte Virtuelle */}
            <TouchableOpacity
                style={styles.cardContainer}
                onPress={() => router.push('confirmAddress')} // Navigation vers la page de confirmation d'adresse
            >
                <View style={styles.cardContent}>
                    <View style={styles.icon}>
                        <Text style={styles.iconText}>⊖</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Virtual debit card</Text>
                        <Text style={styles.cardDescription}>
                            Get free virtual cards instantly, and try disposable for extra security online
                        </Text>
                    </View>
                    {/* <Image source={require('../assets/virtual-card.png')} style={styles.cardImage} /> */}
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    backButton: {
        marginBottom: 20,
    },
    backText: {
        fontSize: 18,
        color: '#007AFF',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginVertical: 10,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        backgroundColor: '#007AFF',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    iconText: {
        color: '#fff',
        fontSize: 18,
    },
    textContainer: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
    },
    cardImage: {
        width: 60,
        height: 40,
        resizeMode: 'contain',
    },
});