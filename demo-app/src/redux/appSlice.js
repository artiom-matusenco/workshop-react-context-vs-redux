import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
export const appSlice = createSlice({
  name: 'app',
  devTools: true,
  initialState,
  reducers: {
    setFetchingEvents: (state) => {
      state.events.loading = true;
    },

    setEvents: (state, { payload }) => {
      state.events = payload;
      state.events.loading = false;
    },

    setEvent: (state, { payload }) => {
      state.events.events.push(payload);
      state.events.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFetchingEvents, setEvents, setEvent } = appSlice.actions;

export default appSlice.reducer;
