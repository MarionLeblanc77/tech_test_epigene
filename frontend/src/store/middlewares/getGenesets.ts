import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';

const getGenesets = createAsyncThunk(
  'GET_GENESETS',
  async () => {
    const result = await axiosInstance.get("/genesets");
    return result.data;
  }
);

export default getGenesets;
