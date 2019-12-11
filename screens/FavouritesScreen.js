import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
  if (favouriteMeals.length === 0 || !favouriteMeals) {
    return (
      <View style={styles.content}>
        <Text>No favourites found start liking some meals!</Text>
      </View>
    );
  }
  return <RecipeList meals={favouriteMeals} onPressHandler={onPressHandler} />;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
