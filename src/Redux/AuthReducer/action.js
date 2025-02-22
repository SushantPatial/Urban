import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS } from "./actionTypes";

export const verify = (user) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    // User signed in successfully.
    //   console.log(user.uid);
    dispatch({ type: AUTH_SUCCESS, payload: user.uid });
  } catch (error) {
    // User couldn't sign in
    dispatch({ type: AUTH_ERROR });
    // ...
  }
};
