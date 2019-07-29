import { createStore } from "redux";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  email: ""
};

export const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
export const UPDATE_LASTNAME = "UPDATE_LASTNAME";
export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const CLICK_LOGIN = "CLICK_LOGIN";
export const RESET_FIELDS = "RESET_FIELDS";

export const updateFirstName = value => {
  return {
    type: UPDATE_FIRSTNAME,
    payload: value
  };
};

export const updateLastName = value => {
  return {
    type: UPDATE_LASTNAME,
    payload: value
  };
};

export const updateUsername = value => {
  return {
    type: UPDATE_USERNAME,
    payload: value
  };
};

export const updatePassword = value => {
  return {
    type: UPDATE_PASSWORD,
    payload: value
  };
};

export const updateEmail = value => {
  return {
    type: UPDATE_EMAIL,
    payload: value
  };
};

export const resetFields = () => {
  return {
    type: RESET_FIELDS
  };
};

// export const clickLogin = () => {
//   return {
//     type:
//   }
// }

function reducer(state = initialState, action) {
  const { type, payload } = action;
  // console.log({ type, payload });
  switch (type) {
    case UPDATE_FIRSTNAME:
      return { ...state, firstName: payload };
    case UPDATE_LASTNAME:
      return { ...state, lastName: payload };
    case UPDATE_USERNAME:
      return { ...state, username: payload };
    case UPDATE_PASSWORD:
      return { ...state, password: payload };
    case UPDATE_EMAIL:
      return { ...state, email: payload };
    case RESET_FIELDS:
      return { ...state, username: "", password: "", email: "" };
    default:
      return state;
  }
}

export default createStore(reducer);
