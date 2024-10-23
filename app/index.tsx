import { StyleSheet, View } from "react-native";
import Button from "~/components/Button";


export default function Home() {
  return (
    <View style={styles.container}>

      <Button variant="black">
        Connexion
      </Button>

      <Button variant="white">
        Inscription
      </Button>

      <Button variant="blue">
        Connexion
      </Button>

      <Button variant="blue-disabled" disabled>
        Connexion
      </Button>

      <Button variant="dark">
        Connexion
      </Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
    gap: 100
  },
});