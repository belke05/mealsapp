import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function CustomButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.2} onPress={props.onPressHandler}>
      <View style={{ ...styles.btn, ...props.style }}>
        <Text style={styles.btntxt}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    backgroundColor: "lightgray",
    borderRadius: 10
  },
  btntxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10
  }
});
