import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

export default Flat = (props) => {
  return (
    <View style={styles.content}>
      <Text style={{ fontWeight: "bold" }}>FlatList</Text>
      <FlatList
        data={props.searchArray}
        keyExtractor={(item, index) => item.key}
        renderItem={(itemData) => (
          <View>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
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
