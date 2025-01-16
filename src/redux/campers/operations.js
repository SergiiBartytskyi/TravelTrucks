import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signup = createAsyncThunk(
  "user/signup",
  async (credentials, thunkAPI) => {
    try {
      const response = (await axios.post("/auth/register", credentials)).data;
      return response;
    } catch (error) {
      if (error.response?.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
