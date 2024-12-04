import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function CardReady() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header Text */}
            <Text style={styles.headerTitle}>Your debit card is ready!</Text>
            <Text style={styles.subTitle}>
                Want to start spending now? No problem!{'\n'}
                You can use your card details to shop online. They’re in the ‘Cards’ section
            </Text>

            {/* Card Image */}
            <View style={styles.cardContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/300x150.png?text=Card+Image' }} // Remplacer par une vraie image si nécessaire
                    style={styles.cardImage}
                />
                <View style={styles.cardOverlay}>
                    <Text style={styles.cardText}>Standard</Text>
                    <Text style={styles.cardNumber}>•• 7560</Text>
                    <Text style={styles.cardLogo}>VISA</Text>
                </View>
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButton} onPress={() => router.push('index')}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginBottom: 30,
    },
    cardContainer: {
        width: 300,
        height: 180,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#3B82F6',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
        marginBottom: 40,
    },
    cardOverlay: {
        flex: 1,
        justifyContent: 'space-between',
    },
    cardText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardNumber: {
        color: '#fff',
        fontSize: 22,
        marginTop: 10,
    },
    cardLogo: {
        alignSelf: 'flex-end',
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    continueButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});