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
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onPressHandler}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground style={styles.bgImg} source={{ uri: props.img }}>
              <View style={styles.titleContainer}>
                <Text style={styles.headerText}>Title: {props.meal.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text style={styles.title}>
              prep time: {props.meal.duration}min
            </Text>
            <Text style={styles.title}>{props.meal.complexity}</Text>
            <Text style={styles.title}>{props.meal.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  bgImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "85%"
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
    backgroundColor: "black"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  headerText: {
    color: "white"
  }
});
