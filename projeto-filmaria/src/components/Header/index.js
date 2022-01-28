import React from "react";
import AppBar from '@mui/material/AppBar';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Links} from "./styled"

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

function Header() {
  return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" theme={theme}>
          <Toolbar color="secondary">

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Links color="inherit" to={`/`}>FILMARIA</Links>
            </Typography>
            <Links color="inherit" to={`/favorito`}>SALVOS</Links>
          </Toolbar>
        </AppBar>
      </Box> 
  );
}

export default Header;