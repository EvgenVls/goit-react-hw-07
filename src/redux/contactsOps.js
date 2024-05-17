import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6647180451e227f23ab10b5f.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get("/contacts");
      return responce.data;
    } catch (error) {
      return thunkAPI.fulfillWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const responce = await axios.post("/contacts", newContact);
      return responce.data;
    } catch (error) {
      return thunkAPI.fulfillWithValue(error.message);
    }
  }
);
