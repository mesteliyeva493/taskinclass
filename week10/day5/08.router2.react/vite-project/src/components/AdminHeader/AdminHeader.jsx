import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function AdminHeader() {
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
            Admin
          </Typography>
        
          <Button color="inherit">
            <Link to={'/admin'}>Login</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/admin/addCategory'}>AddCategory</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/admin/addProducts'}>AddProducts</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/admin/categories'}>Categories</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/admin/Dashboard'}>Dashboard</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/admin/messages'}>Messages</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/admin/orders'}>Orders</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/admin/adminProducts'}>Products</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/admin/users'}>Users</Link>
          </Button>
        </Toolbar>
      </AppBar>

    </>
  )
}

export default AdminHeader