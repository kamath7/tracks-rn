import { useContext } from "react";
import { Context as TrackContext } from "../context/trackContext";
import { Context as LocationContext } from "../context/locationContext";
import { Context as AuthContext } from "../context/authContext";
export default () => {
  const { createTracks } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTracks(name, locations);
    reset();
  };

  return [saveTrack];
};
