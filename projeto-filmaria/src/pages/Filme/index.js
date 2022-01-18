import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/api';

const Filme = () => {
    const {id} = useParams();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const acessarFilme = () => {
        axios
        .get(`${BASE_URL}/${id}`)
        .then((res) => {
            setFilme(res.data)
            setLoading(false);
        }).catch((err) => {
            console.log(err)
        })
    }
    acessarFilme();
    },[])
    if(loading){
        return (
            <div>
                <h1>Carregando...</h1>
            </div>
        )
    }
return (
    <div>
        <img src={filme.foto} alt = {filme.nome}/>
    </div>
)
}
export default Filme;