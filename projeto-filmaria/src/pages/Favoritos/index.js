import React,  {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import {DeleteIcon, FavoritosContainer, InfoFavoritos, DetailsFavoritos, Ul} from "./styled"

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
    <FavoritosContainer>
        <h1>Meus filmes favoritos</h1>
        {filmes.length === 0 && <span> Você não pssui filme salvo</span>}
        <Ul>
          {filmes.map((item) => {
            return(
            <InfoFavoritos key = {item.id}>
                <span>{item.nome}</span>
              <DetailsFavoritos>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <DeleteIcon onClick={() => deletarFilme(item.id)} />
              </DetailsFavoritos>
            </InfoFavoritos>
           ) 
          })}
        </Ul>
    </FavoritosContainer>
  );
}

export default Favoritos;