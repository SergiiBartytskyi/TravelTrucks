import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = createAsyncThunk(
  "campers/fetchAllCampers",
  async ({ filters, pagination }, thunkAPI) => {
    try {
      const params = {
        location: filters.location || "",
        vehicleEquipment: filters.vehicleEquipment || [],
        form: filters.form || "",
        page: pagination.page || 1,
        limit: pagination.limit || 10,
      };

      const response = (await axios.get("/campers", { params })).data;
      console.log("response :>> ", response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
