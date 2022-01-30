import React,  {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
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
        {filmes.length === 0 && <span> Você não pssui filme salvo</span>}
        <ul>
          {filmes.map((item) => {
            return(
            <li key = {item.id}>
                <span>{item.nome}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
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