import React from "react";
import { Platform, Text } from "react-native";

// ----- screens
import OverviewScreen from "../screens/OverviewScreen";
import CategoryScreen from "../screens/CategoryScreen";
import DetailScreen from "../screens/DetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import PlanningScreen from "../screens/PlanningScreen";
import FilterScreen from "../screens/FilterScreen";
// -----

// ----- visual assets

import colors from "../constants/Colors/Colors";
import TabBarIcon from "../components/specific/TabBarIcon";

// -----

// ----- Navigation creators

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

// ----- default options for our stack Main and Fav
// nice to config header styling here

const defaul_StackOptions_Config = {
  headerStyle: {
    backgroundColor: colors.lightred
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
    fontFamily: "roboto-regular"
  },
  headerBackTitleStyle: {
    fontWeight: "bold",
    fontFamily: "roboto-regular"
  }
};

// -----

// ----- Stack Navigators Fav and Main and Stack (for a header)

const MainStackNavigator = createStackNavigator(
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
    defaultNavigationOptions: defaul_StackOptions_Config
  }
);

const FavStackNavigator = createStackNavigator(
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
    defaultNavigationOptions: defaul_StackOptions_Config
  }
);

const FilterStackNavigator = createStackNavigator(
  {
    filter: {
      screen: FilterScreen
    }
  },
  {
    defaultNavigationOptions: defaul_StackOptions_Config
  }
);

// ---- config for our tab which will be the entry point into the app
// ---- from here we will by default load the main stack navigator
// ---- we can also access our favourites stack

const tabScreenConfig = {
  Meals: {
    screen: MainStackNavigator,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "roboto-regular" }}>Meals</Text>
        ) : (
          "Meals"
        ),
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
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "roboto-regular" }}>Planning</Text>
        ) : (
          "Planning"
        ),
      tabBarIcon: ({ tintColor }) => {
        return <TabBarIcon name={`ios-calendar`} size={20} color={tintColor} />;
      },
      tabBarColor: colors.lightred,
      activeColor: "white",
      inactiveColor: colors.lightgray
    }
  },
  Favourites: {
    screen: FavStackNavigator,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "roboto-regular" }}>Favourites</Text>
        ) : (
          "Favourites"
        ),
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

// -----

// ----- tab navigator is on the bottom this will be nested
// in the drawer navigator

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
          labelStyle: {
            fontFamily: "roboto-regular"
          },
          activeTintColor: colors.darkred,
          inactiveTintColor: colors.lightred
        }
      });

// ------

// ------ drawer navigator is our route in

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: "Meals"
      }
    },
    Filters: {
      screen: FilterStackNavigator,
      navigationOptions: {
        drawerLabel: "Filters"
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: colors.darkred,
      inactiveTintColor: colors.lightred,
      labelStyle: {
        fontWeight: "bold"
      }
    }
  }
);

// ------

// will be the root component
const RootNavigator = createAppContainer(MainNavigator);

export default RootNavigator;
