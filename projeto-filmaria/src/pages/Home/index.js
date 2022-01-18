import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/api";
import {Link} from "react-router-dom";

const  Home = () => {
    const [filmes, setFilmes] = useState([]);
    

    useEffect(() => {
        const loadFilmes = () => {
            axios
            .get(`${BASE_URL}`)
            .then((res) => {
                setFilmes(res.data)
            }).catch((err) => {
                console.log(err);
            })
        }

        loadFilmes();
    }, [])

  return (
    <div>
     {filmes.map((filme) => {
         return(
             <article key = {filme.id}>
                <h2>{filme.nome}</h2>
                <img src = {filme.foto} alt = {filme.nome}/>
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
             </article>
         )
     })}
    </div>
  );
}

export default Home;