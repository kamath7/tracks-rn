import CreateDataContext from "./CreateDataContext.js";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = CreateDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
