import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import colors from "../constants/Colors/Colors";
export default function HeaderIcons(props) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={colors.darkblue}
    />
  );
}

const styles = StyleSheet.create({});
