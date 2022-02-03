import styled from "styled-components";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export const FavoritosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;

`
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media(max-width: 800px) {
        li {
            width: 90%;
        }       
    }
`
export const InfoFavoritos = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0px 2px 3px #D3D3D3;

    font-size: 18px;
    text-decoration: none;


`
export const DetailsFavoritos = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    Link{
        text-decoration: none;
    }

`
export const DeleteIcon = styled(DeleteForeverIcon)`
    font-size: 30px;
    color: #8B008B;
    cursor: pointer;
    padding-left: 30px;
`
