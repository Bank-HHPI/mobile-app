import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function ConfirmAddressScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                {/*<Text style={styles.backText}>←</Text>*/}
            </TouchableOpacity>

            <Text style={styles.header}>Confirm PIN</Text>

            {/* Section d'adresse */}
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle}>Delivery address</Text>
                <Text style={styles.addressText}>The Roslin Institute</Text>
                <Text style={styles.addressText}>The University of Edinburgh,</Text>
                <Text style={styles.addressText}>Easter Bush Campus,</Text>
                <Text style={styles.addressText}>Midlothian</Text>
                <Text style={styles.addressText}>EH25 9RG</Text>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
            </View>

            {/* Image de la carte */}
            <Image
                source={{ uri: 'https://via.placeholder.com/300x150.png?text=Map+Placeholder' }}
                style={styles.mapImage}
            />

            {/* Bouton de confirmation */}
            <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Confirm delivery address</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        padding: 20,
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
    addressContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
    },
    addressTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    addressText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 2,
    },
    editButton: {
        position: 'absolute',
        right: 20,
        top: 20,
        backgroundColor: '#007AFF',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    mapImage: {
        width: '100%',
        height: 150,
        borderRadius: 16,
        marginBottom: 20,
    },
    confirmButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});