import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import { requestForegroundPermissionsAsync } from "expo-location";

const TrackCreateScreen = () => {
  const [permError, setPermError] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setPermError(e);
    }
  };
  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Track Create Screen</Text>
      <Map />
      {permError ? <Text>Please set permissions</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});