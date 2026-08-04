import { StyleSheet, Text, View } from "react-native";
import Colors from "@/constants/colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚚 LogiView</Text>

      <Text style={styles.subtitle}>
        Suivi des colis et de la flotte
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.headerBackground,
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.textPrimary,
  },

  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: Colors.textSecondary,
  },
});