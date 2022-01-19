import {  TEST } from "../types";

const initialState = {
  test:"Testing..."
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        test: "Done Testing"
      };
    default:
      return state;
  }
};