import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "./components/Themed";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{ flex: 1 }}>
        <StatusBar />
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}
