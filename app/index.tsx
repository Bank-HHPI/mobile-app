import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import EyeSlash from "~/assets/EyeSlash";
import DefaultLayout from "~/components/DefaultLayout";


export default function Home() {

  useEffect(() => {
    setTimeout(() => {
      router.push({ pathname: "/welcome" })
    }, 1500)
  }, [])

  return (
    <DefaultLayout style={styles.container}>
      <Text style={styles.title}>HHPI Bank</Text>

      <View style={styles.warning}>
        <EyeSlash color="#949195" size={25} strokeWidth={2} />
        <Text style={styles.warningText}>Cet écran est affiché afin de protéger vos données personnels</Text>
      </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 70,
    fontWeight: "bold",
  },
  warning: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  warningText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#949195",
    textAlign: "center",
  },
});