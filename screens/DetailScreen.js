import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CustomButton from "../components/CustomButton";

export default function DetailScreen(props) {
  // const meal = props.navigation.getParam("meal");

  const goToHome = () => {
    props.navigation.popToTop();
  };

  const goToCategory = () => {
    props.navigation.pop();
  };

  return (
    <View style={styles.screen}>
      <Text>Meal Planner</Text>
      <Button onPress={goToCategory} title="go back to catgeory"></Button>
      <CustomButton onPressHandler={goToHome}>go back to home</CustomButton>
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
