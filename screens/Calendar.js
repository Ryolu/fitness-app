import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(""); // State to store the selected date
  const setReminder = () => {
    if (selectedDate) {
      Alert.alert(
        "Reminder Set",
        `You have set a reminder for ${selectedDate}`
      );
    } else {
      Alert.alert("Error", "Please select a date before setting a reminder.");
    }
  };
  const events = {
    "2023-09-10": { selected: true, marked: true },
    "2023-09-15": { selected: true, marked: true },
  };

  // Function to handle date selection
  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Calendar
        // Initially visible month. Default = Date()
        current={"2023-09-01"}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable swipe gestures
        horizontal={true}
        // Show week numbers
        showWeekNumbers={true}
        // Custom calendar theme
        theme={{
          calendarBackground: "#ffffff",
          selectedDayBackgroundColor: "blue",
          selectedDayTextColor: "white",
          todayTextColor: "blue",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
        }}
        // Event marking style
        markedDates={{
          ...events,
          [selectedDate]: { selected: true, marked: true },
        }}
        // Handle date selection
        onDayPress={handleDateSelect}
      />
      <Button title="Set Reminder" onPress={setReminder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  selectedDateText: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default CalendarScreen;
