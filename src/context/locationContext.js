import CreateDataContext from "./CreateDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_location":
      return {
        ...state,
        currentLocation: action.payload,
      };
    default:
      return state;
  }
};
const startRecording = (dispatch) => () => {};
const stopRecording = (dispatch) => () => {};
const addLocation = (dispatch) => (location) => {
  console.log('lalle')
  dispatch({ type: "add_location", payload: location });
};

export const { Context, Provider } = CreateDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
  },
  { recording: false, locations: [], currentLocation: null }
);
