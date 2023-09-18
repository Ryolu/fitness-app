import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useAppContext } from "./context"; // Import the context hook

const RecordsScreen = () => {
  const { ipptRecords } = useAppContext(); // Access the records from the context
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Records</Text>
      <FlatList
        data={ipptRecords}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.recordItem}>
            <Text>Date: {item.date}</Text>
            <Text>Push-Ups: {item.pushUps}</Text>
            <Text>Sit-Ups: {item.sitUps}</Text>
            <Text>Run Time: {item.runTime}</Text>
            <Text>Total Score: {item.totalScore}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  recordItem: {
    marginBottom: 20,
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default RecordsScreen;
