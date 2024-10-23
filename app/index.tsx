import { StyleSheet, Text, View } from "react-native";


export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: "center",
    gap: 100
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#fff",
  },
});