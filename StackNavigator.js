import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
import LoginScreen from  './screens/LoginScreen'
import MainScreen from "./screens/MainScreen";
import IPPTCalculatorScreen from "./screens/IPPTCalculatorScreen";
import CalendarScreen from "./screens/Calendar";
import FinderScreen from "./screens/Finder";
import IPPTRecordScreen from "./screens/Records";
import RecommendedVideosScreen from "./screens/Recommended";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Dailies" component={HomeScreen} />
        <Stack.Screen name="Calculator" component={IPPTCalculatorScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Finder" component={FinderScreen} />
        <Stack.Screen name="Records" component={IPPTRecordScreen} />
        <Stack.Screen name="Recommended" component={RecommendedVideosScreen}/>
        <Stack.Screen name="Workout" component={WorkoutScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Fit" component={FitScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Rest" component={RestScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
