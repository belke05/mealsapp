import React from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
import { ScreenOrientation } from "expo";
import colors from "../constants/Colors/Colors";

export default function MealDetails(props) {
  const meal = props.meal;
  const stepsList = meal.steps
    .toString()
    .split(".")
    .map(step => {
      return step[0] == "," ? step.slice(1) : step;
    });
  let categories = ["Vegan", "Vegetarian", "Lactose Free", "Gluten Free"];
  meal.isGlutenFree
    ? null
    : categories.splice(categories.indexOf("Lactose Free"), 1);
  meal.isLactoseFree
    ? null
    : categories.splice(categories.indexOf("Gluten Free"), 1);
  meal.isVegan ? null : categories.splice(categories.indexOf("Vegan"), 1);
  meal.isVegetarian
    ? null
    : categories.splice(categories.indexOf("Vegetarian"), 1);

  console.log(stepsList, "steplist");
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: meal.imageUrl }} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        {stepsList.slice(0, -1).map((step, i) => {
          return <Text style={styles.textSteps}>{`${i}: ${step}`}.</Text>;
        })}
      </View>
      <View style={styles.ctgContainer}>
        {categories.map(cat => {
          return <Text style={styles.textCat}>{`${cat}`}</Text>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.3
  },
  container: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center"
  },
  imgContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    borderRadius: 5,
    marginVertical: Dimensions.get("window").height * 0.04
  },
  textContainer: {
    backgroundColor: "white",
    padding: 10
  },
  textSteps: {
    color: "black",
    fontWeight: "bold"
  },
  textCat: {},
  ctgContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "90%"
  }
});
