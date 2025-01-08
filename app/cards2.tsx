import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const cardData = [
  {
    uri: "https://via.placeholder.com/300x200?text=Carte+1",
    title: "Carte 1",
    description: "Description spécifique pour Carte 1.",
  },
  {
    uri: "https://via.placeholder.com/300x200?text=Carte+2",
    title: "Carte 2",
    description: "Description spécifique pour Carte 2.",
  },
  {
    uri: "https://via.placeholder.com/300x200?text=Carte+3",
    title: "Carte 3",
    description: "Description spécifique pour Carte 3.",
  },
];

const PhysicalCardScreen = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const cardWidth = screenWidth * 0.8; // 80% de la largeur de l'écran
  const cardMargin = screenWidth * 0.05; // 5% de marge de chaque côté
  const snapToInterval = cardWidth + cardMargin * 2; // Largeur totale par carte

  const renderItem = ({ item }) => (
    <View style={[styles.cardContainer, { width: cardWidth, marginHorizontal: cardMargin }]}>
      <Image source={{ uri: item.uri }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
  );

  const handleMomentumScrollEnd = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / snapToInterval);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('getCards')}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Carte de débit physique</Text>
      </View>

      {/* FlatList Carousel */}
      <FlatList
        ref={flatListRef}
        data={cardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: cardMargin }}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        snapToInterval={snapToInterval} // Largeur totale par carte
        decelerationRate="fast"
        snapToAlignment="center"
        // pagingEnabled={false} // Optionnel : désactiver si conflit avec snapToInterval
        style={styles.flatList}
        // bounces={false} // Optionnel : empêche le rebond en fin de liste
      />

      {/* Indicateurs de Pagination */}
      <View style={styles.paginationContainer}>
        {cardData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      {/* Texte Dynamique */}
      <View style={styles.dynamicTextContainer}>
        <Text style={styles.dynamicText}>{cardData[activeIndex].description}</Text>
      </View>

      {/* Bouton Personnalisable */}
      <TouchableOpacity style={styles.customisableButton}>
        <Text style={styles.customisableText}>✦ Personnalisable</Text>
      </TouchableOpacity>

      {/* Détails de la Carte */}
      <Text style={styles.cardTitle}>Standard</Text>
      <Text style={styles.cardDescription}>
        Notre carte sans contact standard, fabriquée en plastique avec une finition métallique brillante
      </Text>

      {/* Sélecteur de Couleur */}
      <View style={styles.colorPickerContainer}>
        <View style={styles.colorOption} />
        <Text style={styles.deliveryText}>+Frais de livraison à partir de 4,99£</Text>
      </View>

      {/* Bouton Obtenir la Carte Standard */}
      <TouchableOpacity style={styles.getCardButton}>
        <Text style={styles.getCardButtonText}>Obtenir Standard*</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 16,
    // alignItems: "center", // Changer en 'flex-start' ou supprimer pour permettre à FlatList de s'étendre
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  flatList: {
    height: 250, // Hauteur définie pour garantir l'affichage
  },
  cardContainer: {
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    backgroundColor: '#fff', // S'assure que l'image est visible
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#007bff',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
  dynamicTextContainer: {
    marginTop: 16,
    paddingHorizontal: 10,
  },
  dynamicText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  customisableButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginTop: 16,
  },
  customisableText: {
    fontSize: 12,
    color: "#007bff",
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginVertical: 8,
  },
  colorPickerContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#7b61ff", // Couleur par défaut
    marginBottom: 8,
  },
  deliveryText: {
    fontSize: 14,
    color: "#888",
  },
  getCardButton: {
    backgroundColor: "#007bff",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    position: "absolute",
    bottom: 32,
    width: "90%",
    alignItems: "center",
  },
  getCardButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PhysicalCardScreen;
