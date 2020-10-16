import React from 'react';
import { StyleSheet, SafeAreaView, Text, Platform, StatusBar, BackHandler } from 'react-native';

export default App = () => {
    
    return (
        <SafeAreaView style={styles.screen}>
            <Text>1</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1, 
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "android"? StatusBar.currentHeight:0
    }
})