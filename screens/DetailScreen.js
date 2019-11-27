import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CustomButton from "../components/CustomButton";
import { Meals } from "../data/test_data";
export default function DetailScreen(props) {
  const mealId = props.navigation.getParam("meal");
  const meal = Meals.find(({ id }) => {
    return id == mealId;
  });
  console.log(meal);
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
