import { SafeAreaView,StyleSheet,View } from "react-native";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Colors from "@/constants/colors";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import FilterButton from "@/components/FilterButton";

export default function HomeScreen() {

    const [search,setSearch]=useState("")
    const [filter,setFilter]=useState("tous")
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
       <SearchBar value={search}
        onChangeText={setSearch} />
        <View style={styles.filters}>
        <FilterButton
          title="Tous"
          active={filter === "Tous"}
          onPress={() => setFilter("Tous")}
        />

        <FilterButton
          title="En transit"
          active={filter === "En transit"}
          onPress={() => setFilter("En transit")}
        />

        <FilterButton
          title="Livré"
          active={filter === "Livré"}
          onPress={() => setFilter("Livré")}
        />
      </View>
      <SectionTitle title="📦 Colis en cours"/>
      <SectionTitle title="🚚 Véhicules disponibles"/>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  filters: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 25,
  },
});