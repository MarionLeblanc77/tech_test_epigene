import { IGeneset } from '../../@types/genesets';
import './Geneset.css';

interface GenesetProps {
    geneset: IGeneset;
  }

function Geneset({ geneset}: GenesetProps) {
  return (
    <li className="Geneset">
      <h1> {geneset.title} </h1>
      <ul>
        {geneset.genes.map((gene)=>(
          <li>{gene.name}</li>
        ))}
      </ul>
    </li>
  );
}

export default Geneset;
