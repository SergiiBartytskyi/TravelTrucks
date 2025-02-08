import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Camper, GetCampersResponse } from "../types";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = createAsyncThunk<
  GetCampersResponse,
  string,
  { state: RootState; rejectValue: number }
>("campers/fetchAllCampers", async (url, { getState, rejectWithValue }) => {
  const state = getState();
  // const { page } = state.campers;
  try {
    const response = (
      await axios.get<GetCampersResponse>(`/campers?${url}`, {
        params: {
          // page: page || 1,
          limit: 5,
        },
      })
    ).data;
    return response;
  } catch (error: any) {
    // return rejectWithValue(error.message);
    return rejectWithValue(error.status);
  }
});

export const getCamperDetails = createAsyncThunk<
  Camper,
  string,
  { rejectValue: number }
>("campers/fetchCamperDetails", async (id, { rejectWithValue }) => {
  try {
    const response = (await axios.get(`/campers/${id}`)).data;
    return response;
  } catch (error: any) {
    // const status = error.response?.status || 500;
    // return rejectWithValue(status);
    return rejectWithValue(error.status);
  }
});
