import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet, Button } from "react-native";
import colors from "../constants/Colors/Colors";
export default function StarIcon(props) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={colors.darkblue}
    />
  );
}

// <TouchableOpacity activeOpacity={0.5} onPress={props.onPressHandler}>
//   <View style={styles.btn}>
//     <Ionicons name="star" size={24} color="yellow" />
//   </View>
// </TouchableOpacity>

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    backgroundColor: "lightgray",
    borderRadius: 10
  }
});
