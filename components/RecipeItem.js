import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import { ScreenOrientation } from "expo";

export default function RecipeItem(props) {
  let TouchableCmpnt = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmpnt = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmpnt onPress={props.onPressHandler}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <Text style={styles.headerText}>Title: {props.meal.title}</Text>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text style={styles.title}>
              prep time: {props.meal.duration}min
            </Text>
            <Text style={styles.title}>{props.meal.complexity}</Text>
            <Text style={styles.title}>{props.meal.affordability}</Text>
          </View>
        </View>
      </TouchableCmpnt>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    width: "90%",
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "4%",
    height: 200
  },
  headerText: {
    color: "white",
    textAlign: "center"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "80%"
  },
  mealDetails: {
    height: "10%",
    paddingHorizontal: "1%",
    justifyContent: "space-around"
  }
});
