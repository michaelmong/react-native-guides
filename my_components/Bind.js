import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";

export default App = () => {
  const [text1, setText1] = useState("Waiting for tapping");
  const [text2, setText2] = useState("Waiting for tapping");
  const [tapped1, setTapped1] = useState(1);
  const [tapped2, setTapped2] = useState(1);

  const pressHandler = (textJSON) => {
    if (textJSON.line == 1) {
      setText1("This line tapped #" + tapped1);
      setTapped1(tapped1 + 1);
    }
    if (textJSON.line == 2) {
      setText2("This line tapped #" + tapped2);
      setTapped2(tapped2 + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello, World</Text>
      <TouchableWithoutFeedback onPress={pressHandler.bind(this, { line: 1 })}>
        <Text>{text1}</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={pressHandler.bind(this, { line: 2 })}>
        <Text>{text2}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
