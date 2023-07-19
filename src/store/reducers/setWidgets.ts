import { PayloadAction, Reducer } from "@reduxjs/toolkit";
import { State, Widget, initialState } from "../state";

export const setWidgets: Reducer<State, PayloadAction<Widget[]>> = (state, action) => {
  if (!state) {
    return initialState
  }
  return {
    dashboard: {
      ...state.dashboard,
      widgets: action.payload
    }
  }
}