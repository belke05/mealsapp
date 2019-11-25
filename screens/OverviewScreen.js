import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import CategoryContainer from "../components/CategoryContainer";
import { Categories } from "../data/test_data";
import colors from "../constants/Colors/Colors";
import { Images } from "../assets/Images/index";

export default function OverviewScreen(props) {
  function renderGridItem(itemData) {
    const { item } = itemData;
    const imgname = Images[item.name];
    return (
      <CategoryContainer
        name={item.name}
        imageName={imgname}
        bgcolor={item.color}
        onPressHandler={() => {
          props.navigation.navigate({
            routeName: "Category",
            params: {
              categoryId: item.id,
              categoryName: item.name
            }
          });
        }}
      />
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.screen}
      numColumns={2}
      data={Categories}
      renderItem={renderGridItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: "5%"
  }
});
