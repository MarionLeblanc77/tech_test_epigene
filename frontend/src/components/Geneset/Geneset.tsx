import { useRef, useState } from 'react';
import { IGeneset } from '../../@types/genesets';
import './Geneset.css';
import Gene from './Gene/Gene';

interface GenesetProps {
    geneset: IGeneset;
  }

function Geneset({geneset}: GenesetProps) {
  
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const onClick = () => {
    setIsOpen(!isOpen);
  };



  return (
    <li className="Geneset">
      <h1 onClick={onClick}> 
        {isOpen ? "- " : "+ "}
        {geneset.title} 
      </h1>
      {isOpen && 
        <ul>
          {geneset.genes.map((gene)=>(
            <Gene key={gene.id} geneName={gene.name}/>
          ))}
        </ul>
      }
    </li>
  );
}

export default Geneset;
