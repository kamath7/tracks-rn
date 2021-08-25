import React, { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/locationContext";
const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01, //basically zoom levels
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01, //basically zoom levels
        longitudeDelta: 0.01,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
