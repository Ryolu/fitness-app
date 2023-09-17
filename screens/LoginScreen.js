import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

const LoginScreen = () => {
  const navigation = useNavigation(); // Initialize the navigation object
  // State variables to store the entered username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State variable to store login error message

  // Define a database of user credentials
  const userDatabase = {
    user1: "password1",
    user2: "password2",
  };
  const handleLogin = () => {
    // Check if the entered username exists in the userDatabase
    if (userDatabase.hasOwnProperty(username)) {
      // Check if the entered password matches the stored password
      if (userDatabase[username] === password) {
        // Successful login, navigate to the "Main" screen
        navigation.navigate("Main");
        setError(""); // Clear any previous login errors
      } else {
        setError("Incorrect password. Please try again.");
      }
    } else {
      setError("Username not found. Please register an account.");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)} // Update the 'username' state
          value={username} // Set the 'value' prop to display the current state value
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)} // Update the 'password' state
          value={password} // Set the 'value' prop to display the current state value
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  loginButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default LoginScreen;
