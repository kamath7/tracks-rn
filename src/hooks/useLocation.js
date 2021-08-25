import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";

//custom hook
export default (toTrack, callback) => {
  const [permError, setPermError] = useState(null);
  const [subs, setSubs] = useState(null); //to indicate whether watching
  const sub = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000, //update every second
          distanceInterval: 10,
        },
        callback
      );
      setSubs(sub);
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setPermError(e);
    }
  };
  useEffect(() => {
    if (toTrack) {
      startWatching();
    } else {
      subs.remove();
      setSubs(null);
    }
  }, [toTrack]);

  return [permError];
};
