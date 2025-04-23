import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Text style={styles.profileIcon}>DS</Text>
        </View>
        <Text style={styles.title}>Accueil</Text>
        <Icon name="notifications-outline" size={24} color="#000" />
      </View>

      {/* Barre de recherche */}
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#888" />
        <TextInput placeholder="Rechercher" style={styles.searchInput} />
      </View>

      {/* Onglets */}
      <View style={styles.tabsContainer}>
        <Text style={styles.tab}>Comptes</Text>
        <Text style={[styles.tab, styles.activeTab]}>Cartes</Text>
        <Text style={styles.tab}>Liés</Text>
      </View>

      {/* Section Modale */}
      <ScrollView style={styles.modalContainer} showsVerticalScrollIndicator={false}>
        {/* Obtenir une carte */}
        <TouchableOpacity
          style={styles.getCardButton}
          onPress={() => router.push('/getCards')}
        >
          <Icon name="add-circle-outline" size={20} color="#007bff" />
          <Text style={styles.getCardText}>Obtenir une carte</Text>
        </TouchableOpacity>

        {/* Carte virtuelle */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Carte virtuelle jetable</Text>
          <Text style={styles.cardSubtitle}>Pour une utilisation en ligne sécurisée</Text>
        </View>

        {/* Carte physique */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Standard</Text>
          <Text style={styles.cardWarning}>Finalisez votre commande</Text>
        </View>
      </ScrollView>

      {/* Navigation en bas */}
      <View style={styles.bottomNav}>
        <Icon name="home-outline" size={24} color="#007bff" />
        <Icon name="swap-horizontal-outline" size={24} color="#888" />
        <Icon name="grid-outline" size={24} color="#888" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  profileContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    fontSize: 14,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 12,
  },
  tab: {
    fontSize: 14,
    color: "#888",
  },
  activeTab: {
    fontWeight: "bold",
    color: "#000",
  },
  modalContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 12,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2,
  },
  getCardButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e6f3ff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  getCardText: {
    marginLeft: 8,
    color: "#007bff",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  cardWarning: {
    fontSize: 14,
    color: "#ff4d4d",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 12,
  },
});

export default HomeScreen;
