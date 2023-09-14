import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

const LoginScreen = () => {
  // You can define your login logic here
const navigation = useNavigation(); // Initialize the navigation object
const handleLogin = () => {
    // You can implement your login logic here
    // If login is successful, navigate to the "Main" screen
    navigation.navigate("Main");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        // You can handle input changes here
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        // You can handle input changes here
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
            handleLogin();
          // You can implement the login functionality here
          // For example, you can use AsyncStorage or make an API request to authenticate the user
        }}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
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
});

export default LoginScreen;
