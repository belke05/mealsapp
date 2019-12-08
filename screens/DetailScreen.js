import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import DetailsRow from "../components/specific/DetailsRow";
import MealDetails from "../components/specific/MealDetails";
import HeaderIcons from "../components/regular/HeaderIcons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import colors from "./../constants/Colors/Colors";

export default function DetailScreen(props) {
  const mealId = props.navigation.getParam("meal");
  const filteredMeals = useSelector(state => state.meals.filteredmeals);
  const meal = filteredMeals.find(({ id }) => {
    return id == mealId;
  });

  const goToHome = () => {
    props.navigation.popToTop();
  };

  const goToCategory = () => {
    props.navigation.pop();
  };

  const categories = checkCategories();
  function checkCategories() {
    let cats = ["Vegan", "Vegetarian", "Lactose Free", "Gluten Free"];
    meal.isGlutenFree ? null : cats.splice(cats.indexOf("Lactose Free"), 1);
    meal.isLactoseFree ? null : cats.splice(cats.indexOf("Gluten Free"), 1);
    meal.isVegan ? null : cats.splice(cats.indexOf("Vegan"), 1);
    meal.isVegetarian ? null : cats.splice(cats.indexOf("Vegetarian"), 1);
    return cats;
  }

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: meal.imageUrl }} style={styles.img} />
        </View>
        <DetailsRow
          style={styles.mealDetail}
          complexity={meal.complexity}
          affordability={meal.affordability}
          duration={meal.duration}
        />

        <Text style={styles.title}>Ingredients</Text>
        <View style={styles.ingredientView}>
          {meal.ingredients.map((ingredient, i) => {
            return (
              <Text key={i} style={styles.text}>
                {`${
                  i < meal.ingredients.length - 1
                    ? ingredient + ", "
                    : ingredient + "."
                }`}
              </Text>
            );
          })}
        </View>
        <Text style={styles.title}>Steps</Text>
        {meal.steps.map((step, i) => {
          return (
            <View key={i} style={styles.stepView}>
              <Text style={{ ...styles.text, paddingRight: 10 }}>{`${i}`}</Text>
              <Text style={styles.text}>{`${step}`}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.categoryView}>
        {categories.map((cat, i) => {
          return <Text key={i} style={styles.textCat}>{`${cat}`}</Text>;
        })}
      </View>
    </ScrollView>
  );
}

DetailScreen.navigationOptions = navigationData => {
  const onPressHandler = () => {
    console.log("hello world");
  };
  const mealId = navigationData.navigation.getParam("meal");
  let title = "delicious";
  return {
    headerTitle: title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderIcons}>
        <Item
          title="favorite_me"
          iconName="ios-star"
          onPress={onPressHandler}
        />
        <Item
          title="plan_me"
          iconName="ios-calendar"
          onPress={onPressHandler}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.3
  },
  imgContainer: {
    height: Dimensions.get("window").height * 0.3,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    borderRadius: 5,
    marginVertical: Dimensions.get("window").height * 0.04
  },
  textContainer: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontFamily: "roboto-regular"
  },
  textCat: { marginHorizontal: 5, marginBottom: 10 },
  ctgContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "90%"
  },
  mealDetail: {
    width: "60%",
    padding: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: colors.darkblue,
    borderWidth: 2
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 8
  },
  stepView: {
    justifyContent: "flex-start",
    flexDirection: "row",
    marginVertical: 5,
    paddingBottom: 5,
    width: Dimensions.get("window").width * 0.8,
    borderBottomWidth: 2,
    borderBottomColor: colors.darkblue
  },
  ingredientView: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  categoryView: {
    flexDirection: "row",
    marginTop: 10
  }
});
