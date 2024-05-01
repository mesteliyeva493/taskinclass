import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useState } from 'react';
function Header() {
  const [ mode,setMode]=useState(false)
  const modeFun=()=>{
    setMode(!mode)
    if(!mode){
      document.body.classList.add('dark-mode')
      document.body.classList.remove('light-mode')
    }
    else{
      document.body.classList.add('light-mode')
      document.body.classList.remove('dark-mode')
    }
  }
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
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button onClick={modeFun} color="inherit">{mode?<DarkModeIcon/>:<WbSunnyIcon/>}</Button>
      
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header
