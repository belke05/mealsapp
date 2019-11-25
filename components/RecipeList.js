import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import RecipeItem from "./RecipeItem";

export default function RecipeList(props) {
  console.log(props.meals);
  const renderMealItem = itemData => {
    const { item } = itemData;
    return <RecipeItem meal={item} onPressHandler={props.onPressHandler} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.flatlist}
        numColumns={2}
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
