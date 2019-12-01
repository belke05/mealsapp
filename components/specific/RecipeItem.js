import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import DetailsRow from "../specific/DetailsRow";
import colors from "../../constants/Colors/Colors";

export default function RecipeItem(props) {
  const meal = props.meal;
  let TouchableCmpnt = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmpnt = TouchableNativeFeedback;
  }

  return (
    <View style={styles.mealItem}>
      <TouchableCmpnt
        onPress={() => {
          props.onPressHandler(meal.id);
        }}
      >
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground style={styles.bgImg} source={{ uri: props.img }}>
              <View style={styles.titleContainer}>
                <Text style={styles.headerText}>{meal.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <DetailsRow
            style={styles.mealDetail}
            complexity={meal.complexity}
            affordability={meal.affordability}
            duration={meal.duration}
          />
        </View>
      </TouchableCmpnt>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "95%",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 10
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
    backgroundColor: colors.darkblue
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center"
  },
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 17
  }
});
