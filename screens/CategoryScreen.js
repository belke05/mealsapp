import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RecipeList from "../components/specific/RecipeList";
import HeaderIcons from "../components/regular/HeaderIcons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

function CategoryScreen(props) {
  const catId = props.navigation.getParam("categoryId");
  const filteredMeals = useSelector(state => state.meals.filteredmeals);
  const meals = filteredMeals.filter(({ categoryIds }) =>
    categoryIds.includes(catId)
  );
  const onPressHandler = (MealId, MealTitle, isFav) => {
    props.navigation.navigate({
      routeName: "Detail",
      params: {
        meal: MealId,
        mealTitle: MealTitle,
        isFavourite: isFav
      }
    });
  };
  if (meals.length === 0) {
    console.log("no meals");
    return (
      <View style={styles.content}>
        <Text>No meals, check filters?</Text>
      </View>
    );
  }
  return <RecipeList meals={meals} onPressHandler={onPressHandler} />;
}

CategoryScreen.navigationOptions = navigationData => {
  let name;
  navigationData.navigation.getParam("categoryName")
    ? (name = navigationData.navigation.getParam("categoryName"))
    : (name = "category");
  return {
    headerTitle: name,
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderIcons}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigationData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoryScreen;
