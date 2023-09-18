import React, { useState, useRef } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Picker } from '@react-native-picker/picker';


const FinderScreen = () => {
  // State to store the initial map region
  const [initialRegion, setInitialRegion] = useState({
    latitude: 1.3521, // Initial latitude
    longitude: 103.8198, // Initial longitude
    latitudeDelta: 0.0922, // Delta controls the zoom level
    longitudeDelta: 0.0421,
  });

  // Ref to access the MapView component
  const mapViewRef = useRef(null);

  // State to store the selected marker coordinates
  const [selectedMarkerCoordinates, setSelectedMarkerCoordinates] = useState({
    latitude: 1.3298, // Default latitude
    longitude: 103.7718, // Default longitude
  });

  const [selectedLabel, setSelectedLabel] = useState("Maju FCC");

  // Function to handle the search button press
  const handleSearch = () => {
    // Animate the map to the selected marker's location
    mapViewRef.current.animateToRegion(
      {
        ...selectedMarkerCoordinates,
        latitudeDelta: 0.02, // Adjust the delta values to control the zoom level
        longitudeDelta: 0.02,
      },
      1000 // 1000 milliseconds (1 second) animation duration
    );
  };

  // Function to handle picker value change
  const handlePickerChange = (itemValue, itemIndex) => {
    setSelectedMarkerCoordinates(itemValue);
    setSelectedLabel(itemIndex >= 0 ? pickerData[itemIndex].label : "");
  };

  // Options for picker data
  const pickerData = [
    { label: "Maju FCC", value: { latitude: 1.3298, longitude: 103.7718 } },
    { label: "Bedok FCC", value: { latitude: 1.3169, longitude: 103.9540 } },
    { label: "Khatib FCC", value: { latitude: 1.4232, longitude: 103.8283 } },
    { label: "Kranji FCC", value: { latitude: 1.4006, longitude: 103.7416 } },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion} // Set the initial region here
        ref={mapViewRef} // Reference to the MapView component
      > 
        {/* Add markers to the map */}
        <Marker
          coordinate={{ latitude: 1.3298, longitude: 103.7718 }}
          title="Maju FCC"
          description="Blk 19, 39 Maju Drive, Singapore 596303"
        />
        <Marker
          coordinate={{ latitude: 1.3169, longitude: 103.9540 }}
          title="Bedok FCC"
          description="Blk 139, Level 1, Upper East Coast Road Guards Avenue, Singapore 465557"
        />
        <Marker
          coordinate={{ latitude: 1.4232, longitude: 103.8283 }}
          title="Khatib FCC"
          description="Blk 5, Level 1, 302 Sembawang Road, Singapore 758534"
        />
        <Marker
          coordinate={{ latitude: 1.4006, longitude: 103.7416 }}
          title="Kranji FCC"
          description="Blk 912, Level 2, 91 Choa Chu Kang Way, Singapore 688256"
        />
      </MapView>
      {/* Implement the option selector using the Picker component */}
      <Picker
        selectedValue={selectedMarkerCoordinates}
        onValueChange={(itemValue, itemIndex) =>
          handlePickerChange(itemValue, itemIndex)
        }
      >
        {pickerData.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
      <Text>Selected Location: {selectedLabel} (Click on pin for address)</Text>
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
