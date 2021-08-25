import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import "../mockLocations";
import {Context as LocationContext} from '../context/locationContext'
const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext)
  const [permError, setPermError] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000, //update every second
        distanceInterval: 10,
      },(location)=>{
          addLocation(location)
      });
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
