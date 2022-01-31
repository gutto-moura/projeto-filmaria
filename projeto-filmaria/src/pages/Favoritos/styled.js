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
`
export const InfoFavoritos = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: left;
    width: 400px;
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 2px solid #D3D3D3;


    font-size: 18px;
`
export const DetailsFavoritos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const DeleteIcon = styled(DeleteForeverIcon)`
    font-size: 25px;
    color: #8B008B;
    cursor: pointer;
    padding-left: 30px;
`
