import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = createAsyncThunk(
  "campers/fetchAllCampers",
  async (_, { getState, thunkAPI }) => {
    const state = getState();
    const { page } = state.campers;
    const filters = state.filters.filters;
    try {
      const validFilters = {
        location: filters.location || "",
        form: filters.form || "",
        page: page || 1,
        limit: 5,
      };

      if (filters.equipments?.length) {
        filters.equipments.forEach((equipment) => {
          validFilters[equipment] =
            equipment === "transmission" ? "automatic" : true;
        });
      }

      const response = (
        await axios.get("/campers", {
          params: {
            ...validFilters,
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
