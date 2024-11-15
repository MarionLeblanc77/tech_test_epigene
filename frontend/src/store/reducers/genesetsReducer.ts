import { createReducer } from "@reduxjs/toolkit";
import { IGeneset } from '../../@types/genesets';
import getGenesets from "../middlewares/getGenesets";

interface IGenesetsState {
    genesetsCatalog: IGeneset[];
    errorMsg:string[]
  }

const initialState : IGenesetsState= {
  genesetsCatalog: [],
  errorMsg:[]
  };
  
  const genesetsReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(getGenesets.pending, () => {
      console.log('Action getGenesets pending');
    })
    .addCase(getGenesets.fulfilled, (state, action) => {
      // Fill the data if the request is a success 200
      // Any other code generates an error message (to optimize with better error management in the back-end or more cases for different status)
      console.log('Action getGenesets fullfilled');
      console.log(action.payload);
      if (action.payload.status === 200) {
        state.genesetsCatalog = action.payload;
      }
      else {
        state.errorMsg[0]="Désolée, il y a eu une erreur."
      }
    })
    .addCase(getGenesets.rejected, (state) => {
      // Generates an error message
      console.log('Action getGenesets rejected');
      state.errorMsg[0]="Désolée, il y a eu une erreur."
    });
  });
  
  export default genesetsReducer;