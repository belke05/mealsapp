import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Categories, Meals } from "../data/test_data";
import RecipeList from "../components/RecipeList";

function CategoryScreen(props) {
  const catId = props.navigation.getParam("categoryId");
  let category = Categories.find(({ id }) => {
    if (id === catId) return true;
  });
  const meals = Meals.filter(({ categoryIds }) => {
    return categoryIds.includes(catId);
  });
  // console.log(meals[0].affordability, "---");
  // console.log(meals, "one meal");

  return (
    <View style={styles.screen}>
      <RecipeList
        meals={meals}
        onPressHandler={() => {
          props.navigation.navigate({
            routeName: "Detail",
            params: {
              meal: item.id
            }
          });
        }}
      />
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

// <View style={styles.screen}>
//   <Text>{category.name}</Text>
//   <Button
//     title="to details"
//     onPress={() => props.navigation.navigate({ routeName: "Detail" })}
//     // any component loaded with react navigation gets a navigation
//     // prop passed to it
//   />
// </View>

export default CategoryScreen;
