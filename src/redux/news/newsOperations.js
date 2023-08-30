import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'utils/constants';

axios.defaults.baseURL = BASE_URL;

export const fetchNews = createAsyncThunk(
  '/news',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/news');
      return response.data;
    } catch (e) {
      console.log('fetchNewsErr:', e.message);
      return rejectWithValue(e.message);
    }
  },
);
