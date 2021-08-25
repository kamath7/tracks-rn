import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";

//custom hook
export default (callback) => {
  const [permError, setPermError] = useState(null);
  const startWatching = async () => {
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
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setPermError(e);
    }
  };
  useEffect(() => {
    startWatching();
  }, []);

  return [permError];
};
