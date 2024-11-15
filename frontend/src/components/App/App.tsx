import React, { useEffect } from 'react';

import './App.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks-redux';
import getGenesets from '../../store/middlewares/getGenesets';

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

    // Just for the exercise to visualize the data
    console.log(genesetsCatalog)

  return (
    <div className="App">
      <p>Coucou</p>
    </div>
  );
}

export default App;
