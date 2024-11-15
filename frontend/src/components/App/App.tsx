import React, { useEffect, useState } from 'react';

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

  // const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // When the component does its first render, dispatches the action that retrieves and stores all genesets
  useEffect(() => {
    dispatch(getGenesets());
  }, []);

  // const handleQuestionClick = (index: number) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  return (
    <div className="App">
      {errorMsg && <p> {errorMsg} </p>}
      <ul className='App__genesetcatalog'>
        {genesetsCatalog.map((geneset)=>(
          <Geneset 
            key={geneset.id} 
            geneset={geneset}           
            // isOpen={activeIndex === geneset.id}
            // onClick={() => handleQuestionClick(geneset.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
