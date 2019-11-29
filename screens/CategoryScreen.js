import React from "react";
import { Meals } from "../data/test_data";
import RecipeList from "../components/RecipeList";
import HeaderIcons from "../components/HeaderIcons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

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

export default CategoryScreen;
