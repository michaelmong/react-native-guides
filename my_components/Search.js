import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Platform,
  StatusBar,
} from "react-native";
import Flat from "./Flat";
import Scroll from "./Scroll";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  const changeHandler = (text) => {
    setSearchText(text);
  };

  const searchHandler = () => {
    setSearchHistory([
      ...searchHistory,
      { key: searchText, value: searchText },
    ]);
    setSearchText("");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <TextInput
          value={searchText}
          onChangeText={changeHandler}
          style={{ flex: 1, borderColor: "black", borderWidth: 1 }}
        />
        <Button title="SEARCH" onPress={searchHandler} />
      </View>
      <View style={styles.history}>
        <Scroll searchArray={searchHistory} />
        <Flat searchArray={searchHistory} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 50,
    borderColor: "white",
    borderWidth: 1,
  },
  history: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "baseline",
    justifyContent: "center",
    paddingTop: 0,
    borderColor: "white",
    borderWidth: 1,
  },
  screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderColor: "white",
    borderWidth: 1,
  },
});
