import './Gene.css';

interface GeneProps {
    geneName: string;
  }

function Gene({ 
  geneName, 
}: GeneProps) {
  

  return (
    <li className="Gene">
      {geneName}
    </li>
  );
}

export default Gene;