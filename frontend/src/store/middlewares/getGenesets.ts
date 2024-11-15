import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getGenesets = createAsyncThunk(
  'GET_GENESETS',
  async () => {
    const result = await axios.get("http://127.0.0.1:8000/genesets");
    return result.data;
  }
);

export default getGenesets;
