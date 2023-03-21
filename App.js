import * as React from "react";
import { StyleSheet } from "react-native";
import PickImage from "./screens/Camera.js";

export default class App extends React.Component {
  render() {
    return <PickImage />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
