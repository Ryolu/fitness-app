import React from "react";
import { View, StyleSheet, Button } from "react-native";
import MapView from "react-native-maps";


const FinderScreen = () => {
  // Add your map configuration here

  // Function to handle the search button press
  const handleSearch = () => {
    // Implement your search logic here
    // You can use the map's current location or other data for searching
  };

  return (
    <View style={styles.container}>
      <MapView
        // Map configuration here (e.g., initialRegion, markers, etc.)
        style={styles.map}
      />
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
