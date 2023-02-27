// In App.js in a new project

import * as React from "react";
import { View, Text, Button, Linking, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsCom } from "./src/DetailsCom";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    marginTop: 180,
  },
});
function DetailsScreen({ navigation }) {
  return (
    <View style={styles.welcome}>
      <DetailsCom />
    </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Science All Books"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
