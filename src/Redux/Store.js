import { createStore } from "redux";

const initialState = {
  username: "",
  password: ""
};

export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const CLICK_LOGIN = "CLICK_LOGIN";

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

// export const clickLogin = () => {
//   return {
//     type:
//   }
// }

function reducer(state = initialState, action) {
  const { type, payload } = action;
  console.log({ type, payload });
  switch (type) {
    case UPDATE_USERNAME:
      return { ...state, username: payload };
    case UPDATE_PASSWORD:
      return { ...state, password: payload };
    default:
      return state;
  }
}

export default createStore(reducer);
