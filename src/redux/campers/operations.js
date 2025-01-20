import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = createAsyncThunk(
  "campers/fetchAllCampers",
  async (url, { getState, thunkAPI }) => {
    const state = getState();
    const { page } = state.campers;
    try {
      const response = (
        await axios.get(`/campers?${url}`, {
          params: {
            page: page || 1,
            limit: 5,
          },
        })
      ).data;
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperDetails = createAsyncThunk(
  "campers/fetchCamperDetails",
  async (id, thunkAPI) => {
    try {
      const response = (await axios.get(`/campers/${id}`)).data;
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.status);
    }
  }
);
