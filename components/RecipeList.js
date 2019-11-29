import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import RecipeItem from "./RecipeItem";

export default function RecipeList(props) {
  const renderMealItem = itemData => {
    const { item } = itemData;
    return (
      <RecipeItem
        img={item.imageUrl}
        meal={item}
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
