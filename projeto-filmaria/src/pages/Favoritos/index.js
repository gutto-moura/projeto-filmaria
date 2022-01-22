import {useEffect, useState} from "react";
import { toast } from 'react-toastify';

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem('filmes');
    setFilmes(JSON.parse(minhaLista) || []);

  },[])

  const deletarFilme  = ((id) => {
    let filtroFilmes = filmes.filter((item) => {
        return (item.id !== id)
    })
    
    setFilmes(filtroFilmes);
    localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
    toast.success("filme excluído!")
  })

  return (
    <div>
        <h1>Meus filmes favoritos</h1>
        <ul>
          {filmes.map((item) => {
            return(
            <li key = {item.id}>
                <span>{item.nome}</span>
              <div>
                <link to={`/filme/${item.id}`}>Ver detalhes</link>
                <button onClick={() => deletarFilme(item.id)}>Excluir</button>
              </div>
            </li>
            
           ) 
          })}
        </ul>

    </div>
  );
}

export default Favoritos;