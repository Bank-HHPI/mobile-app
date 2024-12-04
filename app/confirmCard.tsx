import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

export default function ConfirmCard() {
    const [selectedAmount, setSelectedAmount] = useState(10); // Montant sélectionné

    const handleAmountChange = (amount) => {
        setSelectedAmount(amount);
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* <TouchableOpacity>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity> */}
                <Text style={styles.title}>Checkout</Text>
                <TouchableOpacity>
                    <Text style={styles.notNowText}>Not now</Text>
                </TouchableOpacity>
            </View>

            {/* Plan, Card, Card Delivery Sections */}
            <View style={styles.sectionContainer}>
                <View style={styles.sectionRow}>
                    <Text style={styles.sectionTitle}>Plan</Text>
                    <Text style={styles.sectionValue}>Standard · Free</Text>
                </View>
                <View style={styles.sectionRow}>
                    <Text style={styles.sectionTitle}>Card</Text>
                    <Text style={styles.sectionValue}>Standard · Free</Text>
                </View>
                <View style={styles.sectionRow}>
                    <Text style={styles.sectionTitle}>Card delivery</Text>
                    <Text style={styles.sectionValue}>Standard · £4.99</Text>
                </View>
            </View>

            {/* Add Money to Spend Later */}
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Add money to spend later</Text>
                    <Text style={styles.selectedAmountText}>£{selectedAmount}</Text>
                </View>
                <View style={styles.amountButtonsContainer}>
                    {[0, 10, 20, 50].map((amount) => (
                        <TouchableOpacity
                            key={amount}
                            style={[
                                styles.amountButton,
                                selectedAmount === amount && styles.amountButtonSelected,
                            ]}
                            onPress={() => handleAmountChange(amount)}
                        >
                            <Text
                                style={[
                                    styles.amountButtonText,
                                    selectedAmount === amount && styles.amountButtonTextSelected,
                                ]}
                            >
                                £{amount}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.otherButton}>
                        <Text style={styles.amountButtonText}>Other</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Total Amount */}
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Total amount</Text>
                    <Text style={styles.totalAmountText}>£{(selectedAmount + 4.99).toFixed(2)}</Text>
                </View>
            </View>

            {/* Add Debit Card Section */}
            <View style={styles.sectionContainer}>
                <View style={styles.cardRow}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/50' }} // Placeholder image
                        style={styles.cardIcon}
                    />
                    <View style={styles.cardDetails}>
                        <Text style={styles.addCardText}>Add debit card</Text>
                        <Text style={styles.cardDetailsText}>Card details added securely</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.changeText}>Change</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Pay Button */}
            <TouchableOpacity style={styles.payButton} onPress={() => router.push('cardReady')}>
                <Text style={styles.payButtonText}>Pay</Text>
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
