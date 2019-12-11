import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import RecipeItem from "./RecipeItem";
import { useSelector } from "react-redux";

export default function RecipeList(props) {
  const favouriteMeals = useSelector(state => state.meals.favourites);
  const renderMealItem = itemData => {
    const { item } = itemData;
    const isFavourite = favouriteMeals.some(meal => item.id === meal.id);
    return (
      <RecipeItem
        img={item.imageUrl}
        meal={item}
        isFav={isFavourite}
        // bind the meal id so it gets used on click
        // in the recipe item component
        onPressHandler={props.onPressHandler}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.flatlist}
        data={props.meals}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  flatlist: {
    width: "100%"
  }
});
