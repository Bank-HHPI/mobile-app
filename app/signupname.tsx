import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { router, useLocalSearchParams } from "expo-router";
import DefaultLayout from "~/components/DefaultLayout";
import Input from "~/components/Transfer/Input";
import Button from "~/components/Button";

export default function SignupName() {
  const params = useLocalSearchParams();
  const { phoneNumber, code, country } = params;
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    router.push({ pathname: "/signupadress", params: { phoneNumber, code, country, birthDate, email } });
  }


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
        <Text style={styles.title}>Informations générales</Text>
        <Text style={styles.subtitle}>
          Le nom et le prénom qui est renseigné sur vos documents d'identité officiels
        </Text>
      </View>
      <View style={styles.input_container}>
        <Input
          onChangeText={setBirthDate}
          value={birthDate}
          label="Date de naissance"
        />
        <Input
          onChangeText={setEmail}
          value={email}
          label="Adresse Email"
        />
      </View>
      <View style={styles.button_container}>
        <Button
            variant="blue"
            onPress={handleSignUp}
            style={{ marginTop: 20, width: "100%" }}
        >
            Continuer
        </Button>
        </View>
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
    paddingBottom: '5%',
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
  button_container: {
    position: 'absolute',
    bottom: '2.5%',
    width: '90%',
    display: 'flex',
},
  input_container: {
    width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20,
  },
});
