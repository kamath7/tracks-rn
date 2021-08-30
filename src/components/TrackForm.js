import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/locationContext";
import useSaveTracks from "../hooks/useSaveTracks";
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTracks();
  console.log(locations.length);
  return (
    <>
      <Spacer>
        <Input
          value={name}
          placeholder="Enter track name"
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        {!recording ? (
          <Button title="Start Recording" onPress={startRecording} />
        ) : (
          <Button title="Stop Recording" onPress={stopRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button onPress={saveTrack} title="Save Recording" />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
