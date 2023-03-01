// In App.js in a new project

import * as React from "react";
import {
  View,
  Text,
  Button,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsCom } from "./src/DetailsCom";
import SingleBook from "./src/SingleBook";
import DifferentBooks from "./src/DifferentBooks";

function SingleScreen({ navigation }) {
  return (
    <View style={styles.welcome}>
      <SingleBook />
    </View>
  );
}

function DifferentScreen({ navigation }) {
  return (
    <View style={styles.welcome}>
      <DifferentBooks />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.welcome}>
      <DetailsCom />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 15 }}>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.submitButtonText}>All Books</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Different")}
      >
        <Text style={styles.submitButtonText}>Different Books</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Single")}
      >
        <Text style={styles.submitButtonText}>Submit Form</Text>
      </TouchableOpacity>
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
        <Stack.Screen name="Single" component={SingleScreen} />
        <Stack.Screen name="Different" component={DifferentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  messageInput: {
    height: 100,
  },
  submitButton: {
    backgroundColor: "#007AFF",
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
