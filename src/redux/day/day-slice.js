import { createSlice } from '@reduxjs/toolkit';
import {
  dayProductPostOperation,
  dayProductDeleteOperation,
  dayProductInfoOperation,
} from './day-operations';

const initialState = {
  day: {},
  daySummary: {},
  eatenProducts: {},
  isLoading: false,
  error: null,
};

const daySlice = createSlice({
  name: 'day',
  initialState,
  extraReducers: {
    [dayProductPostOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [dayProductPostOperation.fulfilled]: (state, { payload }) => {
      state.day = payload;
      state.isLoading = false;
      state.error = null;
    },
    [dayProductPostOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [dayProductDeleteOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [dayProductDeleteOperation.fulfilled]: (state, { meta }) => {
      state.day.eatenProducts = state.day.eatenProducts.filter(
        el => el.id !== meta.arg.eatenProductId
      );

      state.isLoading = false;
      state.error = null;
    },
    [dayProductDeleteOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [dayProductInfoOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [dayProductInfoOperation.fulfilled]: (state, { payload }) => {
      state.day = payload;
      state.isLoading = false;
    },
    [dayProductInfoOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default daySlice.reducer;
