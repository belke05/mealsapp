import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import CategoryContainer from "../components/CategoryContainer";
import { Categories } from "../data/test_data";
import colors from "../constants/Colors/Colors";

export default function OverviewScreen(props) {
  function renderGridItem(itemData) {
    const onPressHandler = () => {
      props.navigation.navigate({
        routeName: "Category",
        params: {
          categoryId: item.id,
          categoryName: item.name
        }
      });
    };
    const { item } = itemData;
    return (
      <CategoryContainer
        name={item.name}
        bgcolor={item.color}
        imgurl={item.imgurl}
        onPressHandler={onPressHandler}
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
