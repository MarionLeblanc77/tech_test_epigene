import React, { useEffect } from 'react';

import './App.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks-redux';
import getGenesets from '../../store/middlewares/getGenesets';
import Geneset from '../Geneset/Geneset';

function App() {
  const dispatch = useAppDispatch();

  const genesetsCatalog = useAppSelector(
    (state)=> state.genesetsReducer.genesetsCatalog
  );

  // For managing error messages
  const errorMsg = useAppSelector((state) => state.genesetsReducer.errorMsg);

  // When the component does its first render, dispatches the action that retrieves and stores all genesets
  useEffect(() => {
    dispatch(getGenesets());
  }, []);

  return (
    <div className="App">
      {errorMsg && <p> {errorMsg} </p>}
      <ul>
        {genesetsCatalog.map((geneset)=>(
          <Geneset key={geneset.id} geneset={geneset}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
