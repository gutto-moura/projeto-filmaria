import styled from "styled-components";
import {Link} from "react-router-dom"

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const DetalhesFilmes = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    text-align: center;

    Link{
        font-size: 20px;
    }
`;
export const ImgFilmes = styled.img`
    border-radius: 10px 10px 0px 0px;
`;
export const TituloFilme = styled.h2`
    font-size: 30px;
    font-family: sans-serif;
    color: #8B008B;

`;
export const LinkAcessar = styled(Link)`
    font-size: 25px;
    font-family: sans-serif;
    padding: 10px;
    text-decoration: none;
    background-color: #9400D3;
    color: #fff;
    border-radius: 0px 0px 10px 10px;

`;