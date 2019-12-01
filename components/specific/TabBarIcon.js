import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet, Button } from "react-native";
import React from "react";

export default function TabBarIcon(props) {
  return <Ionicons name={props.name} size={props.size} color={props.color} />;
}

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignSelf: "center",
    height: "100%"
  }
});
