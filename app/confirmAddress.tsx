import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import MapComponent from './components/Map';

export default function ConfirmAddressScreen() {
    const router = useRouter();

    // État pour l'adresse et pour activer/désactiver le mode édition
    const [address, setAddress] = useState({
        line1: 'Institut National des Sciences Appliquées',
        line2: 'Université de Lyon',
        line3: 'Campus de la Doua',
        city: 'Villeurbanne',
        postalCode: '69100',
    });
    const [isEditing, setIsEditing] = useState(false);

    // Fonction pour gérer la mise à jour d'une ligne d'adresse
    const handleAddressChange = (key: string, value: string) => {
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

            <Text style={styles.header}>Confirmer l'adresse</Text>

            {/* Section d'adresse avec Text ou TextInput selon le mode d'édition */}
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle}>Adresse de livraison</Text>

                {isEditing ? (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder="Ligne d'adresse 1"
                            value={address.line1}
                            onChangeText={(text) => handleAddressChange('line1', text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Ligne d'adresse 2"
                            value={address.line2}
                            onChangeText={(text) => handleAddressChange('line2', text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Ligne d'adresse 3"
                            value={address.line3}
                            onChangeText={(text) => handleAddressChange('line3', text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Ville"
                            value={address.city}
                            onChangeText={(text) => handleAddressChange('city', text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Code postal"
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
                    <Text style={styles.editButtonText}>{isEditing ? 'Enregistrer' : 'Modifier'}</Text>
                </TouchableOpacity>
            </View>

            {/* Carte */}
            <MapComponent 
                style={styles.mapContainer} 
                address={address}
            />

            {/* Bouton de confirmation */}
            <TouchableOpacity style={styles.confirmButton} onPress={() => router.push('/confirmCard')}>
                <Text style={styles.confirmButtonText}>Confirmer l'adresse de livraison</Text>
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
    mapContainer: {
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
