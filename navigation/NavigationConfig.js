import React, { Component } from "react";
import OverviewScreen from "../screens/OverviewScreen";
import CategoryScreen from "../screens/CategoryScreen";
import DetailScreen from "../screens/DetailScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";
import colors from "../constants/Colors/Colors";
// import "react-native-gesture-handler";

// returns a react component
const MainNavigator = createStackNavigator(
  {
    Overview: {
      screen: OverviewScreen,
      navigationOptions: {
        headerTitle: "Meal Planner"
      }
    },
    Category: { screen: CategoryScreen },
    Detail: {
      screen: DetailScreen
    }
  },
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.lightred
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

// will be the root component
const StackNavigation = createAppContainer(MainNavigator);

export default StackNavigation;
