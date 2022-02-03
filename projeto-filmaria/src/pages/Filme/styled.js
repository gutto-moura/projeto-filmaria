import styled from "styled-components";
import Button from '@mui/material/Button';

export const HomeFilmes = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 30px;
    font-family: sans-serif;

    @media(max-width: 800px) {
            display: flex;
            flex-direction: column;
      }

`
export const TituloFilme = styled.div`
    margin-rigth: 30px;
    display: flex;
    flex-direction: column;

    img{
        border-radius: 10px;
        box-shadow: 0 0 1em #DDA0DD;
    }
    h1{
        color: #8B008B;
    }

    @media(max-width: 800px) {
         margin-rigth: 0;
        width: 100%;
        text-align: center;
        img {
            width:90%;
        }
        h1{
            text-align: center;
        }
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
    @media(max-width: 800px) {
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 90%;

        strong{
            width: 100%;
            font-size: 0.9em;
            text-align: center;
            margin-top: 0px;
            padding-top: 0px;
        }
      }
`
export const ButtonsFilme = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    width: 100% ;

`
export const ButtonSave = styled(Button)`
    background-color: #8B008B;
    
`
export const ButtonTrailer = styled(Button)`
    background-color: #BA55D3;
    color: #fff;
    
`