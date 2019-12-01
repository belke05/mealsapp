import DefaultText from "../regular/DefaultText";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

export default function DetailsRow(props) {
  let durationColor;
  let complexityColor;
  let affordabilityColor;
  if (props.duration < 10) {
    durationColor = "rgba(0,255,0,0.4)";
  } else if (props.duration < 20) {
    durationColor = "rgba(255,255,0,0.4)";
  } else {
    durationColor = "rgba(255,0,0,0.4)";
  }
  if (props.affordability === "affordable") {
    affordabilityColor = "rgba(0,255,0,0.4)";
  } else if (props.affordability === "pricey") {
    affordabilityColor = "rgba(255,255,0,0.4)";
  } else {
    affordabilityColor = "rgba(255,0,0,0.4)";
  }
  if (props.complexity === "simple") {
    complexityColor = "rgba(0,255,0,0.4)";
  } else if (props.complexity === "challenging") {
    complexityColor = "rgba(255,255,0,0.4)";
  } else {
    complexityColor = "rgba(255,0,0,0.4)";
  }
  return (
    <View style={{ ...styles.mealRow, ...props.style }}>
      <DefaultText style={{ ...styles.title, color: durationColor }}>
        {props.duration}min
      </DefaultText>
      <DefaultText style={{ ...styles.title, color: complexityColor }}>
        {props.complexity.toUpperCase()}
      </DefaultText>
      <DefaultText style={{ ...styles.title, color: affordabilityColor }}>
        {props.affordability.toUpperCase()}
      </DefaultText>
    </View>
  );
}

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row"
  },

  title: {
    fontFamily: "roboto-regular",
    fontSize: 14
  }
});
