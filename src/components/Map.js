import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 12.9141 + i * 0.001,
        longitude: 74.856 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 12.9141 - i * 0.002,
        longitude: 74.856 - i * 0.002,
      });
    }
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 12.9141,
        longitude: 74.856,
        latitudeDelta: 0.01, //basically zoom levels
        longitudeDelta: 0.01,
      }}
    >
      <Polyline lineDashPattern={[4]} coordinates={points} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
