import React from "react";
import OverviewScreen from "../screens/OverviewScreen";
import CategoryScreen from "../screens/CategoryScreen";
import DetailScreen from "../screens/DetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import PlanningScreen from "../screens/PlanningScreen";
import TabBarIcon from "../components/TabBarIcon";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";
import colors from "../constants/Colors/Colors";
import { Platform } from "@unimodules/core";
// import "react-native-gesture-handler";

const tabScreenConfig = {
  Meals: {
    screen: StackNavigator,
    // will configure our nested stack navigator
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: tabInfo => {
        return (
          <TabBarIcon
            name={"ios-restaurant"}
            size={20}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: colors.lightgray
    }
  }, // this gives us a nested navigator
  Planning: {
    screen: PlanningScreen,
    navigationOptions: {
      tabBarLabel: "Planning",
      tabBarIcon: ({ tintColor }) => {
        return <TabBarIcon name={`ios-calendar`} size={20} color={tintColor} />;
      },
      tabBarColor: colors.lightred,
      activeColor: "white",
      inactiveColor: colors.lightgray
    }
  },
  Favourites: {
    screen: FavouritesStackNavigator,
    navigationOptions: {
      tabBarLabel: "Favourites",
      tabBarIcon: ({ tintColor, focused }) => {
        return (
          <TabBarIcon
            name={`ios-star${focused ? "" : "-outline"}`}
            size={20}
            color={tintColor}
          />
        );
      },
      tabBarColor: colors.lightgray
    }
  }
};

const StackOptionsConfig = {
  headerStyle: {
    backgroundColor: colors.lightred
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

// returns a react component
const StackNavigator = createStackNavigator(
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
    defaultNavigationOptions: StackOptionsConfig
  }
);

const FavouritesStackNavigator = createStackNavigator(
  {
    Favourites: {
      screen: FavouritesScreen,
      navigationOptions: {
        headerTitle: "Favourites"
      }
    },
    Detail: {
      screen: DetailScreen
    }
  },
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: StackOptionsConfig
  }
);

const TabNavigator =
  Platform.OS == "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: colors.darkred,
        activeColor: colors.darkred,
        inactiveColor: colors.lightred,
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        // the options will be merged with the screen the navigationOptions
        // are not merged with the screen
        defaultNavigationOptions: ({ navigation }) => ({}),
        tabBarOptions: {
          activeTintColor: colors.darkred,
          inactiveTintColor: colors.lightred
        }
      });

// will be the root component
const RootNavigator = createAppContainer(TabNavigator);

export default RootNavigator;
