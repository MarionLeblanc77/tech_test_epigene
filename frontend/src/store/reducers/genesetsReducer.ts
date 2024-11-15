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
      console.log('Action getGenesets fullfilled');
      state.genesetsCatalog = action.payload;
        state.errorMsg=[];
    })
    .addCase(getGenesets.rejected, (state) => {
      // Generates an error message
      console.log('Action getGenesets rejected');
      state.errorMsg[0]="Désolée, il y a eu une erreur."
    });
  });
  
  export default genesetsReducer;