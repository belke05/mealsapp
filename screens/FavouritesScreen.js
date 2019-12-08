import React from "react";
import { View, Text } from "react-native";
import RecipeList from "../components/specific/RecipeList";
import { useSelector } from "react-redux";

export default function FavouritesScreen(props) {
  const favouriteMeals = useSelector(state => state.meals.favourites);
  const onPressHandler = (mealId, MealTitle) => {
    props.navigation.navigate({
      routeName: "Detail",
      params: {
        meal: mealId,
        mealTitle: MealTitle
      }
    });
  };

  return <RecipeList meals={favouriteMeals} onPressHandler={onPressHandler} />;
}
