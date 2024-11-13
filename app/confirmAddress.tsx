import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function ConfirmAddressScreen() {
    const router = useRouter();

    // État pour l'adresse et pour activer/désactiver le mode édition
    const [address, setAddress] = useState({
        line1: 'The Roslin Institute',
        line2: 'The University of Edinburgh',
        line3: 'Easter Bush Campus',
        city: 'Midlothian',
        postalCode: 'EH25 9RG',
    });
    const [isEditing, setIsEditing] = useState(false);

    // Fonction pour gérer la mise à jour d'une ligne d'adresse
    const handleAddressChange = (key, value) => {
        setAddress(prevAddress => ({
            ...prevAddress,
            [key]: value,
        }));
    };

    // Basculer le mode édition
    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                {/*<Text style={styles.backText}>←</Text>*/}
            </TouchableOpacity>

            <Text style={styles.header}>Confirm PIN</Text>

            {/* Section d'adresse avec Text ou TextInput selon le mode d'édition */}
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle}>Delivery address</Text>

                {isEditing ? (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder="Address Line 1"
                            value={address.line1}
                            onChangeText={(text) => handleAddressChange('line1', text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Address Line 2"
                            value={address.line2}
                            onChangeText={(text) => handleAddressChange('line2', text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Address Line 3"
                            value={address.line3}
                            onChangeText={(text) => handleAddressChange('line3', text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="City"
                            value={address.city}
                            onChangeText={(text) => handleAddressChange('city', text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Postal Code"
                            value={address.postalCode}
                            onChangeText={(text) => handleAddressChange('postalCode', text)}
                        />
                    </>
                ) : (
                    <>
                        <Text style={styles.addressText}>{address.line1}</Text>
                        <Text style={styles.addressText}>{address.line2}</Text>
                        <Text style={styles.addressText}>{address.line3}</Text>
                        <Text style={styles.addressText}>{address.city}</Text>
                        <Text style={styles.addressText}>{address.postalCode}</Text>
                    </>
                )}

                {/* Bouton pour basculer en mode édition */}
                <TouchableOpacity style={styles.editButton} onPress={toggleEditMode}>
                    <Text style={styles.editButtonText}>{isEditing ? 'Save' : 'Edit'}</Text>
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
        marginBottom: 10,
    },
    addressText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 2,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 8,
        marginBottom: 10,
        fontSize: 14,
        color: '#333',
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
