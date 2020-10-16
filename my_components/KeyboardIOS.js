import React from "react";
import {
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default App = () => {
  <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <TextInput
        style={{ width: "100%", borderColor: "black", borderWidth: 1 }}
      />
    </TouchableWithoutFeedback>
  </View>;
};
