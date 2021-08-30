import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";
// import "../mockLocations";
import { Context as LocationContext } from "../context/locationContext";
import TrackForm from "../components/TrackForm";
const TrackCreateScreen = ({ isFocused }) => {
  const { state:{recording}, addLocation } = useContext(LocationContext);
  const callback = useCallback(location =>{
    addLocation(location, recording)
  },[recording])
  const [permError] = useLocation(isFocused || recording,callback);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Track Create Screen</Text>
      <Map />

      {permError ? <Text>Please set permissions</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});
