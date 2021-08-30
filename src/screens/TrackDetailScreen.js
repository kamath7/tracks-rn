import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as TrackContext } from "../context/trackContext";
const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find((track1) => track1._id === _id);
  return (
    <View>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
    </View>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({});
