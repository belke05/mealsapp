import React from "react";
import { Meals } from "../data/test_data";
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

  return <RecipeList meals={meals} onPressHandler={onPressHandler} />;
}

CategoryScreen.navigationOptions = navigationData => {
  const name = navigationData.navigation.getParam("categoryName");
  return {
    headerTitle: name
  };
};

export default CategoryScreen;
