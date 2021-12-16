import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export const Navbar = () => {
  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img alt="logo" src="/lgo.svg" height="50" />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Государственная Налоговая Служба <br/> Кыргызской Республики
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
