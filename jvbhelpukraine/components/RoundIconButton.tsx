import React from "react";
import { View, StyleSheet, StyleProp } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import colors from "../constants/Colors";

type Props = {
  antIconName: React.ComponentProps<typeof AntDesign>["name"];
  size?: number;
  color?: string;
  style?: StyleProp<any>;
  onPress: () => void;
};

const RoundIconBtn: React.FC<Props> = ({ antIconName, size, color, style, onPress }) => {
  return (
    <AntDesign
      name={antIconName}
      size={size || 24}
      color={color || colors.light.text}
      style={[styles.icon, { ...style }]}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.light.background,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});

export default RoundIconBtn;
