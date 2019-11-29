import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryContainer from "../components/CategoryContainer";
import { Categories } from "../data/test_data";
import HeaderIcons from "../components/HeaderIcons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
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

OverviewScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "categories",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderIcons}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: "5%"
  }
});
