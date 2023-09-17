import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

const MainScreen = ({ navigation }) => {
  // Define navigation actions for each button press

  const navigateToLogin = () => {
    // Navigate to the "Login" screen
    navigation.navigate("Login");
  };

  const navigateToDailyExercise = () => {
    // Navigate to the "Daily Exercise" screen
    navigation.navigate("Dailies");
  };

  const navigateToIPPTCalculator = () => {
    // Navigate to the "IPPT Calculator" screen
    navigation.navigate("Calculator");
  };

  const navigateToCalendar = () => {
    // Navigate to the "Calendar" screen
    navigation.navigate("Calendar");
  };

  const navigateToIPPTRecords = () => {
    // Navigate to the "IPPT Records" screen
    navigation.navigate("Records");
  };

  const navigateToFinder = () => {
    // Navigate to the "Finder" screen
    navigation.navigate("Finder");
  };

  const navigateToRecommend = () => {
    navigation.navigate("Recommended");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={navigateToLogin}>
        <Text style={{ color: "red", fontSize: 16, fontWeight: "bold" }}>
          Logout
        </Text>
      </TouchableOpacity>
      {/* Image */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtvdXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
        }}
        style={styles.image}
      />
      {/* Buttons in rows */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToDailyExercise}
        >
          <Text style={styles.buttonText}>Daily Exercise and mission</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToIPPTCalculator}
        >
          <Text style={styles.buttonText}>IPPT Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToCalendar}>
          <Text style={styles.buttonText}>Calendar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={navigateToIPPTRecords}>
          <Text style={styles.buttonText}>IPPT Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToFinder}>
          <Text style={styles.buttonText}>Finder</Text>
        </TouchableOpacity>
      </View>

      {/* Recommended Video */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={navigateToRecommend}>
          <Text style={styles.buttonText}>Recommended videos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 350,
    height: 200,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logoutButton: {
    position: "absolute",
    top: 50,
    right: 10,
    zIndex: 1,
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  button: {
    flex: 1,
    backgroundColor: "blue",
    padding: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  videoContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginBottom: 20,
  },
});

export default MainScreen;
