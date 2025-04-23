import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { router } from 'expo-router';

const { width: screenWidth } = Dimensions.get('window');

const cardData = [
  {
    title: "Standard",
    cardNumber: "•• 7560",
    description: "Notre carte sans contact standard, fabriquée en plastique avec une finition métallique brillante.",
  },
  {
    title: "Premium",
    cardNumber: "•• 8921",
    description: "Notre carte premium avec des avantages exclusifs et un service prioritaire.",
  },
  {
    title: "Metal",
    cardNumber: "•• 3458",
    description: "Carte en métal véritable avec des avantages premium et un statut exclusif.",
  },
];

const PhysicalCardScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const cardWidth = screenWidth * 0.8; // 80% de la largeur de l'écran
  const cardMargin = screenWidth * 0.05; // 5% de marge de chaque côté
  const snapToInterval = cardWidth + cardMargin * 2; // Largeur totale par carte

  const renderItem = ({ item }) => (
    <View style={[styles.cardContainer, { width: cardWidth, marginHorizontal: cardMargin }]}>
      <View style={styles.cardImageContainer}>
        <View style={styles.cardOverlay}>
          <Text style={styles.cardOverlayTitle}>{item.title}</Text>
          <Text style={styles.cardNumber}>{item.cardNumber}</Text>
          <Text style={styles.cardLogo}>VISA</Text>
        </View>
      </View>
    </View>
  );

  const updateActiveIndex = (offset: number) => {
    const index = Math.round(offset / snapToInterval);
    if (index >= 0 && index < cardData.length && index !== activeIndex) {
      setActiveIndex(index);
      console.log('Carte active:', index, cardData[index].title);
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    updateActiveIndex(contentOffset);
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    updateActiveIndex(contentOffset);
  };

  // Fonction pour naviguer entre les cartes
  const goToCard = (index: number) => {
    if (index >= 0 && index < cardData.length) {
      flatListRef.current?.scrollToOffset({ 
        offset: index * snapToInterval,
        animated: true
      });
      setActiveIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
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
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        snapToInterval={snapToInterval}
        decelerationRate="fast"
        snapToAlignment="center"
        style={styles.flatList}
        initialScrollIndex={0}
        getItemLayout={(data, index) => ({
          length: cardWidth + cardMargin * 2,
          offset: (cardWidth + cardMargin * 2) * index,
          index,
        })}
        scrollEventThrottle={16}
      />

      {/* Indicateurs de Pagination */}
      <View style={styles.paginationContainer}>
        {cardData.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => goToCard(index)}
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
      <Text style={styles.cardTitle}>{cardData[activeIndex].title}</Text>
      <Text style={styles.cardDescription}>
        {cardData[activeIndex].description}
      </Text>

      {/* Sélecteur de Couleur */}
      <View style={styles.colorPickerContainer}>
        <View style={styles.colorOption} />
        <Text style={styles.deliveryText}>+Frais de livraison à partir de 4,99£</Text>
      </View>

      {/* Bouton Obtenir la Carte Standard */}
      <TouchableOpacity 
        style={styles.getCardButton}
        onPress={() => router.push('/home')}
      >
        <Text style={styles.getCardButtonText}>Obtenir {cardData[activeIndex].title}*</Text>
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
  cardImageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: '#3B82F6',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardOverlay: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardOverlayTitle: {
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
    marginTop: 50,
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
