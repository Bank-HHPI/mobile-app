import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";
import DefaultLayout from "~/components/DefaultLayout";
import CountryAccount from "~/components/CountryAccount";
import { accountsTypes } from "~/constantes/AccountsTypes";

export default function SignupCountry() {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectCountry = (country: any) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  return (
    <DefaultLayout style={styles.container}>
      <TouchableOpacity onPress={router.back}>
        <Svg width={28} height={28} viewBox="0 0 28 28" fill="none">
          <Path
            d="M5.677 13.646c0 .263.114.527.316.72l5.8 5.792c.212.202.44.299.695.299.554 0 .958-.396.958-.932a.933.933 0 00-.29-.694l-1.977-2.004-2.55-2.329 2.049.123H21.33c.58 0 .985-.404.985-.976 0-.58-.405-.984-.985-.984H10.678l-2.04.123 2.54-2.329 1.978-2.004a.934.934 0 00.29-.694c0-.536-.404-.932-.958-.932-.255 0-.492.097-.72.317l-5.775 5.774a1.012 1.012 0 00-.316.73z"
            fill="#1C1C1E"
          />
        </Svg>
      </TouchableOpacity>

      <View style={styles.title_container}>
        <Text style={styles.title}>Pays de résidence</Text>
        <Text style={styles.subtitle}>
          Les conditions et services qui s'appliquent à vous dépendront de votre pays de résidence
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.input}
      >
        {selectedCountry ? (
          <View style={styles.selectedCountryContainer}>
            {selectedCountry.country}
            <Text style={styles.selectedText}>{selectedCountry.countryName}</Text>
          </View>
        ) : (
          <Text style={styles.placeholderText}>Sélectionner un pays</Text>
        )}
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <ScrollView style={styles.contriesList}>
        {accountsTypes.map((accountType, index) => (
            <CountryAccount
                key={index}
                title={accountType.countryName}
                currency={accountType.currency}
                country={accountType.country}
                onPress={() => handleSelectCountry(accountType)}
            />
            ))}

        </ScrollView>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.closeButton}
        >
          <Text style={styles.closeButtonText}>Fermer</Text>
        </TouchableOpacity>
      </Modal>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '15%',
    position: 'relative',
    alignItems: 'flex-start',
  },
  title_container: {
    paddingTop: '5%',
    paddingBottom: '10%',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 36,
  },
  subtitle: {
    color: 'black',
    fontSize: 14,
    opacity: 0.5,
    paddingTop: '1%',
    paddingRight: '10%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: 56,
    backgroundColor: '#f8f8f8',
  },
  selectedCountryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  selectedText: {
    fontSize: 16,
    marginLeft: 10,
  },
  placeholderText: {
    fontSize: 16,
    color: '#aaa',
  },
  closeButton: {
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  contriesList: {
    padding: 16,
    paddingBottom: 40,
    backgroundColor: "#fff",
  },
});
