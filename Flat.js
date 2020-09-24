import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

export default Flat = (props) => {
  return (
    <FlatList
      data={props.searchArray}
      keyExtractor={(item, index) => item.key}
      renderItem={(itemData) => (
        <View>
          <Text>{itemData.item.value}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({});
