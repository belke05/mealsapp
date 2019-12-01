import React from "react";
import { View, Text } from "react-native";
import RecipeList from "../components/specific/RecipeList";
import { Meals } from "../data/test_data";

export default function FavouritesScreen(props) {
  const favMeals = props.navigation.getParam("favMeals");
  const favTest = ["m1", "m2"];
  const filteredMeals = Meals.filter(({ id }) => {
    return favTest.includes(id);
  });
  const onPressHandler = mealId => {
    props.navigation.navigate({
      routeName: "Detail",
      params: {
        meal: mealId
      }
    });
  };

  return <RecipeList meals={filteredMeals} onPressHandler={onPressHandler} />;
}
