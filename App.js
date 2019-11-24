import React, { Component } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import StackNavigation from "./navigation/NavigationConfig";
import { AppLoading } from "expo";
import { useScreens } from "react-native-screens";

useScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    // "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
  });
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFontLoading: true
    };
  }
  render() {
    if (this.state.isFontLoading) {
      return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => {
            this.setState({
              isFontLoading: false
            });
          }}
        />
      );
    }
    return <StackNavigation />;
  }
}
