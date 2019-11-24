import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import colors from "../constants/Colors/Colors";
import { Categories } from "../data/test_data";

export default function CategoryScreen(props) {
  const catId = props.navigation.getParam("categoryId");
  let category = Categories.find(({ id }) => {
    if (id === catId) return true;
  });

  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>{category.name}</Text>
      <Button
        title="to details"
        onPress={() => props.navigation.navigate({ routeName: "Detail" })}
        // any component loaded with react navigation gets a navigation
        // prop passed to it
      />
    </View>
  );
}

CategoryScreen.navigationOptions = navigationData => {
  const name = navigationData.navigation.getParam("categoryName");
  return {
    headerTitle: name
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
