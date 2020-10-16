import React, { useState } from "react";
import {
  Modal,
  Platform,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";

export default App = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <SafeAreaView style={styles.screen}>
      <Modal visible={modalVisible}>
        <View style={styles.modal}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <Text>Click to hide this content</Text>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
      <Modal visible={!modalVisible}>
        <View style={styles.modal}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <Text>Click to show content</Text>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
  },
  screen: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
