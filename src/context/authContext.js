import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./CreateDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";
import axios from "axios";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

// when you move from signup to signin or vice versa
const clearErrorMsg = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

//signin if token already present on phone
const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("SignIn");
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something wrong! Please try again",
      });
    }
  };

const signout = (dispatch) => async () => {
 await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow")
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMsg, tryLocalSignIn },
  { token: null, errorMessage: "" }
);
