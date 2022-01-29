import styled from "styled-components";
import Button from '@mui/material/Button';

export const HomeFilmes = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
    font-family: sans-serif;
`
export const TituloFilme = styled.div`
    margin-rigth: 20px;

    img{
        border-radius: 10px;
        box-shadow: 0 0 1em #DDA0DD;
    }
    h1{
        color: #8B008B;
    }
`
export const SinopseFilme = styled.div`
    width: 700px;
    margin-top: 20px;

    h2{
        text-align: center;
        font-size: 30px;
        color: #8B008B
    }
    strong{
        font-size: 1.1em;
        line-height: 1.9em;
        margin-top: 50px;
        padding-top: 20px;
    }
`
export const ButtonsFilme = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    width: 600px

`
export const ButtonSave = styled(Button)`
    background-color: #8B008B;
    
`
export const ButtonTrailer = styled(Button)`
    background-color: #BA55D3;
    color: #fff;
    
`