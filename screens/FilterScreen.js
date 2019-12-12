import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useDispatch } from "react-redux";
import { update_filters } from "../redux_config/_actions";
import colors from "../constants/Colors/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderIcons from "../components/regular/HeaderIcons";

export default function FilterScreen(props) {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree,
      isVegan,
      isLactoseFree,
      isVegetarian
    };
    dispatch(update_filters(appliedFilters));
  }, [isGlutenFree, isVegan, isLactoseFree, isVegetarian, dispatch]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  const FilterCheck = props => {
    return (
      <View style={styles.filterItem}>
        <Text style={styles.title}>{props.children}</Text>
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
      <Text style={styles.header}>Available Filters / Restrictions</Text>
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
    justifyContent: "flex-start",
    marginHorizontal: 30
  },
  header: {
    marginTop: 20,
    fontFamily: "roboto-regular",
    fontSize: 20,
    textAlign: "center"
  },
  title: {
    fontFamily: "roboto-regular",
    fontSize: 18,
    textAlign: "center"
  },
  filterItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20
  }
});

FilterScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderIcons}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderIcons}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};
