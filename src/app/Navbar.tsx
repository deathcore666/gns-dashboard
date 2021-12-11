import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar variant="dense">
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
    </Box>
  );
}