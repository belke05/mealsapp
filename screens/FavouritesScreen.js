import React from "react";
import { View, Text } from "react-native";
import RecipeList from "../components/RecipeList";

export default function FavouritesScreen(props) {
  const favMeals = props.navigation.getParam("favMeals");
  const meals = Meals.filter(({ id }) => {
    return favMeals.includes(id);
  });

  const onPressHandler = mealId => {
    props.navigation.navigate({
      routeName: "Detail",
      params: {
        favMeal: mealId
      }
    });
  };

  return (
    <View>
      <RecipeList meals={meals} onPressHandler={onPressHandler} />
    </View>
  );
}
