import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "@/constants/colors";
import { Parcel,Vehicle } from "../../types";

interface CardProps {
  item: Parcel | Vehicle;
  expanded: boolean;
  onPress: () => void;
}

export default function Card({
  item,
  expanded,
  onPress,
}: CardProps) {
  const isParcel = "reference" in item;

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress}
    >
    <View style={styles.header}>
  <View>
    <Text style={styles.title}>
      {isParcel ? item.reference : item.registration}
    </Text>

    <Text style={styles.subtitle}>
      {isParcel ? item.destination : item.type}
    </Text>
  </View>

  <View style={styles.rightContent}>
    <View
      style={[
        styles.badge,
        item.status === "Livré" ||
        item.status === "Disponible"
          ? styles.successBadge
          : styles.warningBadge,
      ]}
    >
      <Text
        style={[
          styles.badgeText,
          item.status === "Livré" ||
          item.status === "Disponible"
            ? styles.successText
            : styles.warningText,
        ]}
      >
        {item.status}
      </Text>
    </View>

    <Text style={styles.arrow}>
      {expanded ? "🔼" : "🔽"}
    </Text>
  </View>
</View>

      {expanded && (
        <View style={styles.details}>
          {isParcel ? (
            <>
              <Text style={styles.detail}>
                Poids : {item.weight} kg
              </Text>

              <Text style={styles.detail}>
                Expédition : {item.shippingDate}
              </Text>
            </>
          ) : (
            <>
              <Text style={styles.detail}>
                Chauffeur : {item.driver}
              </Text>

              <Text style={styles.detail}>
                Kilométrage : {item.mileage} km
              </Text>
            </>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,

    shadowColor: Colors.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: Colors.textPrimary,
  },

  subtitle: {
    marginTop: 4,
    color: Colors.textSecondary,
  },

  badge: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  arrow: {
  marginTop: 8,
  fontSize: 16,
  color: Colors.textSecondary,
  textAlign: "right",
},

  successBadge: {
    backgroundColor: Colors.badgeSuccessBg,
  },

  warningBadge: {
    backgroundColor: Colors.badgeWarningBg,
  },

  successText: {
    color: Colors.success,
    fontWeight: "600",
  },

  warningText: {
    color: Colors.warning,
    fontWeight: "600",
  },

  badgeText: {
    fontSize: 13,
  },

  details: {
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    gap: 6,
  },

  detail: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  rightContent: {
  alignItems: "center",
  gap: 8,
},
});