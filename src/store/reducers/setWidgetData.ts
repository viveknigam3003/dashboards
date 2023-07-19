import { PayloadAction, Reducer } from "@reduxjs/toolkit";
import { State, WidgetData, initialState } from "../state";

export const setWidgetData: Reducer<State, PayloadAction<{ id: string, data: WidgetData }>> = (state, action) => {
  if (!state) {
    return initialState
  }
  return {
    dashboard: {
      ...state.dashboard,
      data: {
        ...state.dashboard.data,
        [action.payload.id]: action.payload.data
      }
    }
  }
}