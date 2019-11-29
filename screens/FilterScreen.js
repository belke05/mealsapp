import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FilterScreen() {
  return (
    <View style={styles.screen}>
      <Text>Meal Planner</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

FilterScreen.navigationOptions = {
  headerTitle: "meal filter"
};
