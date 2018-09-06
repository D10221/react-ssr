import { Reducer } from "redux";

export const STORE_KEY = "$SESSION";

export const actionTypes = {
  INITIALIZE: `${STORE_KEY}/INITIALIZE`
};

export const initialize = () => ({
  type: actionTypes.INITIALIZE
});

export const reducer: Reducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE:
      return true;
    default:
      return state;
  }
};

export const selector = (state: { [key: string]: any }) => {
  return state[STORE_KEY];
};
