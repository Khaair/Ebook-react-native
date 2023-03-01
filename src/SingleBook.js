import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SingleBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [body, setBody] = useState("");

  const handleSubmit = () => {
    fetch("http://localhost:4000/api/save", {
      method: "POST",

      body: JSON.stringify({
        title,
        author,
        body,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted successfully!", data);
        // Reset the form fields
        setTitle("");
        setAuthor("");
        setBody("");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter your title"
      />

      <Text style={styles.label}>Author</Text>
      <TextInput
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
        placeholder="Enter your author"
      />

      <Text style={styles.label}>Body</Text>
      <TextInput
        style={styles.input}
        value={body}
        onChangeText={setBody}
        placeholder="Enter your body"
        keyboardType="body-address"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
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

export default SingleBook;
