import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Camper } from "../types";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

interface GetCampersResponse {
  items: Camper[];
  total: number;
}

export const getCampers = createAsyncThunk<
  GetCampersResponse,
  void,
  { state: RootState; rejectValue: number }
>("campers/fetchAllCampers", async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState();
    const { page } = state.campers;
    const { url } = state.filters;

    const response = (
      await axios.get<GetCampersResponse>(`/campers?${url}`, {
        params: {
          // url,
          page: page || 1,
          limit: 5,
        },
      })
    ).data;
    return response;
  } catch (error: any) {
    const status = error.response?.status || 500;
    return rejectWithValue(status);
  }
});

// export const getCampers = createAsyncThunk<
//   GetCampersResponse,
//   void,
//   { state: RootState; rejectValue: string }
// // >("campers/fetchAllCampers", async (url, { getState, thunkAPI }) => {
//   const state = getState();
//   const { page } = state.campers;
//   try {
//     const response = (
//       await axios.get(`/campers?${url}`, {
//         params: {
//           page: page || 1,
//           limit: 5,
//         },
//       })
//     ).data;
//     return response;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

export const getCamperDetails = createAsyncThunk<
  Camper,
  string,
  { rejectValue: number }
>("campers/fetchCamperDetails", async (id, { rejectWithValue }) => {
  try {
    const response = (await axios.get(`/campers/${id}`)).data;
    return response;
  } catch (error: any) {
    const status = error.response?.status || 500;
    return rejectWithValue(status);
  }
});
