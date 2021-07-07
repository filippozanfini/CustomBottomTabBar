import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import TabBarNavigator from "./navigation/TabBarNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabBarNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
