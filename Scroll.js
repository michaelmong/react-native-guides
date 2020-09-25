import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

export default Scroll = (props) => {
  return (
    <View style={styles.content}>
      <Text style={{ fontWeight: "bold" }}>ScrollView</Text>
      <ScrollView>
        {props.searchArray.map((item) => (
          <Text key={item.key}>{item.value}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "white",
    borderWidth: 1,
  },
});
