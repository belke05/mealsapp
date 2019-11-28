import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Categories, Meals } from "../data/test_data";
import RecipeList from "../components/RecipeList";

function CategoryScreen(props) {
  const catId = props.navigation.getParam("categoryId");
  const meals = Meals.filter(({ categoryIds }) => {
    return categoryIds.includes(catId);
  });

  const onPressHandler = MealId => {
    props.navigation.navigate({
      routeName: "Detail",
      params: {
        meal: MealId
      }
    });
  };

  return (
    <View style={styles.screen}>
      <RecipeList meals={meals} onPressHandler={onPressHandler} />
    </View>
  );
}

CategoryScreen.navigationOptions = navigationData => {
  const name = navigationData.navigation.getParam("categoryName");
  return {
    headerTitle: name
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: "100%"
  }
});

export default CategoryScreen;
