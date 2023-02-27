import React from "react";
import { View, Text, Button, Linking, StyleSheet } from "react-native";

export const DetailsCom = () => {
  return (
    <View>
      <Button
        style={{ marginBottom: 11 }}
        title="Physics"
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/13_O8QxKeb-n1Uzedizp-DOF3W308ooH8/view"
          ).catch((err) => {
            console.error("Failed opening page because: ", err);
            alert("Failed to open page");
          });
        }}
      />
      <Button
        title="Chemistry"
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/1mmrqJcr5UC2FI8o0wz86EEwcoT5e9niU/view"
          ).catch((err) => {
            console.error("Failed opening page because: ", err);
            alert("Failed to open page");
          });
        }}
      />
      <Button
        title="Higher Math"
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/1gL8g0QrjMKYG1kRMsocm0ar9Cm6HxOYe/view"
          ).catch((err) => {
            console.error("Failed opening page because: ", err);
            alert("Failed to open page");
          });
        }}
      />
      <Button
        title="Biology"
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/1DR37jrZTU7RgyAugr546F-KaUt2RLQlB/view"
          ).catch((err) => {
            console.error("Failed opening page because: ", err);
            alert("Failed to open page");
          });
        }}
      />
    </View>
  );
};
