import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

export default function ConfirmCard() {
    const [montantSelectionne, setMontantSelectionne] = useState(10); // Montant sélectionné

    const gererChangementMontant = (montant: number) => {
        setMontantSelectionne(montant);
    };

    return (
        <ScrollView style={styles.container}>
            {/* En-tête */}
            <View style={styles.header}>
                {/* <TouchableOpacity>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity> */}
                <Text style={styles.title}>Paiement</Text>
                <TouchableOpacity>
                    <Text style={styles.notNowText}>Plus tard</Text>
                </TouchableOpacity>
            </View>

            {/* Sections Plan, Carte, Livraison de la carte */}
            <View style={styles.sectionContainer}>
                <View style={styles.sectionRow}>
                    <Text style={styles.sectionTitle}>Plan</Text>
                    <Text style={styles.sectionValue}>Standard · Gratuit</Text>
                </View>
                <View style={styles.sectionRow}>
                    <Text style={styles.sectionTitle}>Carte</Text>
                    <Text style={styles.sectionValue}>Standard · Gratuit</Text>
                </View>
                <View style={styles.sectionRow}>
                    <Text style={styles.sectionTitle}>Livraison carte</Text>
                    <Text style={styles.sectionValue}>Standard · 4,99€</Text>
                </View>
            </View>

            {/* Ajouter de l'argent à dépenser plus tard */}
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Ajouter de l'argent</Text>
                    <Text style={styles.selectedAmountText}>{montantSelectionne}€</Text>
                </View>
                <View style={styles.amountButtonsContainer}>
                    {[0, 10, 20, 50].map((montant) => (
                        <TouchableOpacity
                            key={montant}
                            style={[
                                styles.amountButton,
                                montantSelectionne === montant && styles.amountButtonSelected,
                            ]}
                            onPress={() => gererChangementMontant(montant)}
                        >
                            <Text
                                style={[
                                    styles.amountButtonText,
                                    montantSelectionne === montant && styles.amountButtonTextSelected,
                                ]}
                            >
                                {montant}€
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.otherButton}>
                        <Text style={styles.amountButtonText}>Autre</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Montant Total */}
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Montant total</Text>
                    <Text style={styles.totalAmountText}>{(montantSelectionne + 4.99).toFixed(2)}€</Text>
                </View>
            </View>

            {/* Ajouter une carte bancaire */}
            <View style={styles.sectionContainer}>
                <View style={styles.cardRow}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/50' }} // Image de substitution
                        style={styles.cardIcon}
                    />
                    <View style={styles.cardDetails}>
                        <Text style={styles.addCardText}>Ajouter une carte bancaire</Text>
                        <Text style={styles.cardDetailsText}>Détails ajoutés de manière sécurisée</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.changeText}>Modifier</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Bouton Payer */}
            <TouchableOpacity style={styles.payButton} onPress={() => router.push('/cardReady')}>
                <Text style={styles.payButtonText}>Payer</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    backText: {
        fontSize: 18,
        color: '#007AFF',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    notNowText: {
        fontSize: 16,
        color: '#007AFF',
    },
    sectionContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
    },
    sectionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    sectionValue: {
        fontSize: 16,
        color: '#555',
    },
    selectedAmountText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    amountButtonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    amountButton: {
        backgroundColor: '#e6e6e6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginRight: 10,
        marginBottom: 10,
    },
    amountButtonSelected: {
        backgroundColor: '#007AFF',
    },
    amountButtonText: {
        fontSize: 14,
        color: '#555',
    },
    amountButtonTextSelected: {
        color: '#fff',
    },
    otherButton: {
        backgroundColor: '#e6e6e6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 10,
    },
    totalAmountText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    cardDetails: {
        flex: 1,
    },
    addCardText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    cardDetailsText: {
        fontSize: 14,
        color: '#555',
    },
    changeText: {
        fontSize: 16,
        color: '#007AFF',
    },
    payButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 20,
    },
    payButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
