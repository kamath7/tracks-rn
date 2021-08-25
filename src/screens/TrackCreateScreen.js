import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";
// import "../mockLocations";
import { Context as LocationContext } from "../context/locationContext";
const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [permError] = useLocation(addLocation);
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
