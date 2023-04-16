import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Cart from '../Cart/index'
import './Header.scss'
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography role="heading" 
                      variant="h6"  
                      align="left" 
                      sx={{ flexGrow: 1 }}
          >
            <Link className='heading' to={'/'}>
              The Everything Store
            </Link>
          </Typography>
          <Cart align='right'/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}