import React from "react";
import { View, StyleSheet, Button } from "react-native";
import MapView from "react-native-maps";

const FinderScreen = () => {
  // Function to handle the search button press
  const handleSearch = () => {};

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default FinderScreen;
