import React from "react";
import { View, Text } from "react-native";
import RecipeList from "../components/specific/RecipeList";
import { useSelector } from "react-redux";

export default function FavouritesScreen(props) {
  const filteredMeals = useSelector(state => state.meals.allmeals);
  const onPressHandler = (mealId, MealTitle) => {
    props.navigation.navigate({
      routeName: "Detail",
      params: {
        meal: mealId,
        mealTitle: MealTitle
      }
    });
  };

  return <RecipeList meals={filteredMeals} onPressHandler={onPressHandler} />;
}
