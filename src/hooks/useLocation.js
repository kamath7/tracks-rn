import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";

//custom hook
export default (toTrack, callback) => {
  const [permError, setPermError] = useState(null);
  // const [subs, setSubs] = useState(null); //to indicate whether watching

  useEffect(() => {
    let subs;
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        subs = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000, //update every second
            distanceInterval: 10,
          },
          callback
        );
        if (!granted) {
          throw new Error("Location permission not granted");
        }
      } catch (e) {
        setPermError(e);
      }
    };
    if (toTrack) {
      startWatching();
    } else {
      if (subs) {
        subs.remove();
      }
      subs = null;
    }
    return () => {
      if (subs) {
        subs.remove();
      }
    };
  }, [toTrack, callback]);

  return [permError];
};
