import React from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView
} from "react-native";
import { ScreenOrientation } from "expo";

export default function MealDetails(props) {
  const meal = props.meal;
  const stepsList = props.meal.steps;
  const ingredientList = props.meal.ingredients;

  return <View></View>;
}

const styles = StyleSheet.create({});
