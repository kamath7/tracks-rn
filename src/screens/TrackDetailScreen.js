import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as TrackContext } from "../context/trackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find((track1) => track1._id === _id);
  const initCoords = track.locations[0].coords;
  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initCoords,
        }}
        style={styles.map}
      >
        <Polyline
          coordinates={track.locations.map((location) => location.coords)}
          lineDashPattern={[4]}
        />
      </MapView>
    </>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({ map: { height: 300 } });
