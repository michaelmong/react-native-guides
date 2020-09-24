import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

export default Scroll = (props) => {
  return (
    <ScrollView style={styles.scroll}>
      {props.searchArray.map((item) => (
        <Text key={item.key}>{item.value}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexDirection: "column",
    width: "80%",
    backgroundColor: "#fff",
    paddingTop: 20,
    borderColor: "white",
    borderWidth: 1,
  },
});
