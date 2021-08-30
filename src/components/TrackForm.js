import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/locationContext";
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
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
          <Button title="Save Recording" />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
