import React, { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/api';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading'
import {HomeFilmes, TituloFilme, SinopseFilme, ButtonsFilme, ButtonSave, ButtonTrailer} from "./styled";


const Filme = () => {
    const {id} = useParams();
    const history = useHistory();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const acessarFilme = () => {
        axios
        .get(`${BASE_URL}/${id}`)
        .then((res) => {
            //SE DIGITAR UM ID INVALIDO, RETORNA PARA A PAGINA HOME
            if(res.data.length === 0){
                history.replace("/")
            }
            setFilme(res.data)
            setLoading(false);
        }).catch((err) => {
            console.log(err)
        })
    }
    acessarFilme();
    },[history, id]);
    const  salvarFilme = () => {
        //SALVANDO A LISTA NO LOCALSTORAGE
        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const filmesDuplicados = filmesSalvos.some((filmeSalvos) => filmeSalvos.id === filme.id)

        if(filmesDuplicados){
            toast.error('Este filme ja foi salvo')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success(`O FILME ${filme.nome} FOI SALVO COM SUCESSO!`)
    }
    if(loading){
        return (
            <div>
                <Loading />
            </div>
        )
    }
return (
    <HomeFilmes>
        <TituloFilme>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt = {filme.nome}/>
        </TituloFilme>
        <SinopseFilme>
            <h2>Sinopse</h2>
            <strong>{filme.sinopse}</strong>
            <ButtonsFilme>
                <ButtonSave variant="contained" onClick = {() => {salvarFilme()}}>SALVAR</ButtonSave>
                <ButtonTrailer><a target="blank"  href={`https://www.youtube.com/results?search_query=${filme.nome} trailer`}></a>TRAILER</ButtonTrailer>
            </ButtonsFilme>
        </SinopseFilme>
    </HomeFilmes>
)
}
export default Filme;