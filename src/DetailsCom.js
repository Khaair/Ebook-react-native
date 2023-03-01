import React from "react";
import {
  View,
  Text,
  Button,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export const DetailsCom = () => {
  return (
    <View style={{ padding: 15 }}>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/13_O8QxKeb-n1Uzedizp-DOF3W308ooH8/view"
          ).catch((err) => {
            console.error("Failed opening page because: ", err);
            alert("Failed to open page");
          });
        }}
      >
        <Text style={styles.submitButtonText}>Physics</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/1mmrqJcr5UC2FI8o0wz86EEwcoT5e9niU/view"
          ).catch((err) => {
            console.error("Failed opening page because: ", err);
            alert("Failed to open page");
          });
        }}
      >
        <Text style={styles.submitButtonText}>Chemistry</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/1gL8g0QrjMKYG1kRMsocm0ar9Cm6HxOYe/view"
          ).catch((err) => {
            console.error("Failed opening page because: ", err);
            alert("Failed to open page");
          });
        }}
      >
        <Text style={styles.submitButtonText}>Higher Math</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/1DR37jrZTU7RgyAugr546F-KaUt2RLQlB/view"
          ).catch((err) => {
            console.error("Failed opening page because: ", err);
            alert("Failed to open page");
          });
        }}
      >
        <Text style={styles.submitButtonText}>Biology</Text>
      </TouchableOpacity>
    </View>
  );
};

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
