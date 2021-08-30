import { useContext } from "react";
import { Context as TrackContext } from "../context/trackContext";
import { Context as LocationContext } from "../context/locationContext";
import { navigate } from "../navigationRef";
export default () => {
  const { createTracks } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTracks(name, locations);
    reset();
    navigate("TrackList");
  };

  return [saveTrack];
};
