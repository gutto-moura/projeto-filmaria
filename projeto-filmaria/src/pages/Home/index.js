import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/api";
import Loading from "../../components/Loading"
import {HomeContainer, DetalhesFilmes, ImgFilmes, TituloFilme, LinkAcessar} from "./style"



const  Home = () => {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFilmes = () => {
            axios
            .get(`${BASE_URL}`)
            .then((res) => {
                setFilmes(res.data)
                setLoading(false);
            }).catch((err) => {
                console.log(err);
            })
        }

        loadFilmes();
    }, [])

    if(loading){
        return (
            <div>
                <Loading />
            </div>
        )
    }
  return (
    <HomeContainer>
     {filmes.map((filme) => {
         return(
             <DetalhesFilmes key = {filme.id}>
                <TituloFilme>{filme.nome}</TituloFilme>
                <ImgFilmes src = {filme.foto} alt = {filme.nome}/>
                <LinkAcessar to={`/filme/${filme.id}`}>Acessar</LinkAcessar> 
             </DetalhesFilmes>
         )
     })}
    </HomeContainer>
  );
}

export default Home;