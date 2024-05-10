import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function ClientHeader() {
  return (
    <>

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
            Client
          </Typography>
          <Button color="inherit">
            <Link to={'/'}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/clientlogin'}>ClientLogin</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/basket'}>Basket</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/contactUs'}>ContactUs</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/productDetail'}>ProductDetail</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/clientProducts'}>MyProducts</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/register'}>Register</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/user'}>User</Link>
          </Button>
        </Toolbar>
      </AppBar>

    </>
  )
}

export default ClientHeader

