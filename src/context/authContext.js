import CreateDataContext from "./CreateDataContext.js";
import trackerApi from "../api/tracker";
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};
const signout = (dispatch) => {
  return () => {};
};
export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
