import { LocationSubscriber } from "expo-location/build/LocationSubscribers";
import React, { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Circle, Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/locationContext";
const Map = () => {
  const {
    state: { currentLocation, locations },
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
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,167,180,1.0)"
        fillColor="rgba(158,157,180,0.3)"
      />
      <Polyline coordinates={locations.map(loc => loc.coords)} lineDashPattern={[4]}/>
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

/*
     region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01, //basically zoom levels
        longitudeDelta: 0.01,
      }}

*/
