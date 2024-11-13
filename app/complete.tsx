import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const plans = {
    Metal: {
        title: "Metal",
        price: "£12.99/month",
        description: "The ultimate experience",
        features: [
            { title: "Unlimited foreign exchange", description: "Get fee-free currency exchange Mon-Fri, in 36+ currencies" },
            { title: "Commission-free stock trading", description: "10 commission-free trades per month. Other fees may apply. Capital at risk" },
            { title: "International travel insurance", description: "Medical treatment up to £10M with a £50 excess" },
        ],
    },
    Premium: {
        title: "Premium",
        price: "£9.99/month",
        description: "Enhanced experience",
        features: [
            { title: "Fee-free ATM withdrawals", description: "Up to £400 per month" },
            { title: "Priority support", description: "Get help from our support team faster" },
        ],
    },
    Plus: {
        title: "Plus",
        price: "£5.99/month",
        description: "Great for everyday use",
        features: [
            { title: "Free card delivery", description: "Get your card delivered at no additional cost" },
            { title: "Fee-free foreign transactions", description: "Spend abroad without extra fees" },
        ],
    },
    Standard: {
        title: "Standard",
        price: "Free",
        description: "Basic account with no monthly fee",
        features: [
            { title: "Essential banking", description: "Manage your money with ease" },
        ],
    },
};

export default function SelectPlanScreen() {
    const [selectedPlan, setSelectedPlan] = useState("Metal");

    const currentPlan = plans[selectedPlan];
    const router = useRouter();

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.skipText}>Skip</Text>
            <Text style={styles.header}>Select plan</Text>

            {/* Plan Tabs */}
            <View style={styles.tabsContainer}>
                {Object.keys(plans).map((plan) => (
                    <TouchableOpacity
                        key={plan}
                        onPress={() => setSelectedPlan(plan)}
                        style={[styles.tab, selectedPlan === plan && styles.activeTab]}
                    >
                        <Text style={[styles.tabText, selectedPlan === plan && styles.activeTabText]}>{plan}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Plan Card */}
            <View style={styles.planCard}>
                <Text style={styles.planTitle}>{currentPlan.title}</Text>
                <Text style={styles.planPrice}>{currentPlan.price}</Text>
                <Text style={styles.planDescription}>{currentPlan.description}</Text>
                {selectedPlan === "Metal" && (
                    <View style={styles.popularBadge}>
                        <Text style={styles.popularBadgeText}>Popular</Text>
                    </View>
                )}
            </View>

            {/* Features List */}
            <View style={styles.featuresContainer}>
                <Text style={styles.featuresTitle}>Top features</Text>
                {currentPlan.features.map((feature, index) => (
                    <View key={index} style={styles.featureItem}>
                        <Text style={styles.featureTitle}>{feature.title}</Text>
                        <Text style={styles.featureDescription}>{feature.description}</Text>
                    </View>
                ))}
            </View>

            {/* Button */}
            <View style={styles.container}>
                {/* Autres éléments de l'écran "complete" */}

                {/* Bouton pour accéder à GetCardScreen */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push('/getCard')} // Utilise '/getCard' pour correspondre à la route
                >
                    <Text style={styles.buttonText}>Get card</Text>
                </TouchableOpacity>
            </View>

            {/* Disclaimer */}
            <Text style={styles.disclaimer}>
                This is a 12 month plan. By proceeding you have read and agree to the Terms & Conditions and Insurance Documents.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 20,
    },
    contentContainer: {
        paddingBottom: 20,
    },
    skipText: {
        textAlign: 'right',
        color: '#007AFF',
        marginVertical: 10,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    tab: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    activeTab: {
        backgroundColor: '#f1f1f1',
    },
    tabText: {
        fontSize: 16,
        color: '#999',
    },
    activeTabText: {
        color: '#000',
        fontWeight: 'bold',
    },
    planCard: {
        backgroundColor: '#000',
        borderRadius: 16,
        padding: 20,
        marginVertical: 20,
        position: 'relative',
    },
    planTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    planPrice: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 5,
    },
    planDescription: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
    },
    popularBadge: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
    },
    popularBadgeText: {
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold',
    },
    featuresContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginVertical: 20,
    },
    featuresTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    featureItem: {
        marginBottom: 20,
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    featureDescription: {
        fontSize: 14,
        color: '#666',
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disclaimer: {
        fontSize: 12,
        color: '#999',
        textAlign: 'center',
        marginTop: 20,
    },
});