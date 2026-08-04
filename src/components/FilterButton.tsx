import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "@/constants/colors";

interface FilterButtonProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

export default function FilterButton({
  title,
  active,
  onPress,
}: FilterButtonProps) {
  return (
    <TouchableOpacity   //equivalent de <button onClick={...}>
      style={[
        styles.button,
        active && styles.activeButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          active && styles.activeText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.buttonSecondaryBorder,
    backgroundColor: Colors.buttonSecondary,
  },

  activeButton: {
    backgroundColor: Colors.buttonPrimary,
  },

  text: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.buttonSecondaryText,
  },

  activeText: {
    color: Colors.buttonPrimaryText,
  },
});