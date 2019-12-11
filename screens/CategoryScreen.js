import React from "react";
import RecipeList from "../components/specific/RecipeList";
import HeaderIcons from "../components/regular/HeaderIcons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

function CategoryScreen(props) {
  const catId = props.navigation.getParam("categoryId");
  const filteredMeals = useSelector(state => state.meals.filteredmeals);
  const favouriteMeals = useSelector(state => state.meals.favourites);
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
