import { SafeAreaView,ScrollView, StyleSheet,View } from "react-native";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Colors from "@/constants/colors";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import FilterButton from "@/components/FilterButton";
import { parcels,vehicles } from "../../data/data";
import Card from "@/components/Card";

export default function HomeScreen() {

    const [search,setSearch]=useState("")
    const [filter,setFilter]=useState("Tous")
    const [expandedParcel, setExpandedParcel] = useState<string | null>(null);
const [expandedVehicle, setExpandedVehicle] = useState<string | null>(null);
const filteredParcels = parcels.filter((parcel) => {
  // Filtre par statut
  const matchesStatus =
    filter === "Tous" || parcel.status === filter;

  // Recherche
  const matchesSearch =
    parcel.reference
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    parcel.destination
      .toLowerCase()
      .includes(search.toLowerCase());

  return matchesStatus && matchesSearch;
});

const filteredVehicles = vehicles.filter((vehicle) => {
  const matchesSearch =
    vehicle.registration
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    vehicle.type
      .toLowerCase()
      .includes(search.toLowerCase());

  return matchesSearch;
});
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
          <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
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
      {filteredParcels.map((parcel) => (
  <Card
    key={parcel.id}
    item={parcel}
    expanded={expandedParcel === parcel.id}
    onPress={() =>
      setExpandedParcel(
        expandedParcel === parcel.id ? null : parcel.id
      )
    }
  />
))}
      <SectionTitle title="🚚 Véhicules disponibles"/>
      {filteredVehicles.map((vehicle) => (
  <Card
    key={vehicle.id}
    item={vehicle}
    expanded={expandedVehicle === vehicle.id}
    onPress={() =>
      setExpandedVehicle(
        expandedVehicle === vehicle.id ? null : vehicle.id
      )
    }
  />
))}
      </ScrollView>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  filters: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 30,
  },
});