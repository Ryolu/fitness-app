import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FitnessContext } from "./Context";

import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import { AppContextProvider } from "./screens/context";

export default function App() {
  return (
    <FitnessContext>
      <AppContextProvider>
        <StackNavigator />
      </AppContextProvider>
    </FitnessContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
