import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Dimensions } from "react-native";
import colors from "../constants/Colors/Colors";

export default function FilterScreen() {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const FilterCheck = props => {
    return (
      <View style={styles.filterItem}>
        <Text>{props.children}</Text>
        <Switch
          value={props.value}
          onValueChange={props.onValueChange}
          trackColor={{ true: colors.darkred }}
          thumbColor={colors.lightred}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text>Available Filters / Restrictions</Text>
      <FilterCheck
        value={isGlutenFree}
        onValueChange={() => setIsGlutenFree(!isGlutenFree)}
      >
        Gluten-Free
      </FilterCheck>
      <FilterCheck value={isVegan} onValueChange={() => setIsVegan(!isVegan)}>
        Vegan
      </FilterCheck>
      <FilterCheck
        value={isLactoseFree}
        onValueChange={() => setIsLactoseFree(!isLactoseFree)}
      >
        Lactose-Free
      </FilterCheck>
      <FilterCheck
        value={isVegetarian}
        onValueChange={() => setIsVegetarian(!isVegetarian)}
      >
        Vegetarian
      </FilterCheck>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start"
  },
  title: {
    fontFamily: "roboto-regular",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  filterItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

FilterScreen.navigationOptions = {
  headerTitle: "meal filter"
};
