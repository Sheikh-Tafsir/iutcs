import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import '../../styles/Navbar.css';
import {Link} from 'react-router-dom'

const Adminnavbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleSubmenuClick = (event) => {
      setSubmenuAnchorEl(event.currentTarget);
    };
  
    const handleSubmenuClose = () => {
      setSubmenuAnchorEl(null);
    };
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const logoutFunc = () => {
        localStorage.setItem("localStorageUsername",null);
        window.location.href = "/admin/login";

    }
  return (
    <>
        <div className=' navbar'>
            <div className="w-2/3 lg:w-1/3 navImageBar">
                <img src="https://scontent.fdac134-1.fna.fbcdn.net/v/t1.15752-9/379633144_326787363197731_6137547151598542345_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFL3gjt45ElZNfJxb1WR4_T2O7z2e4X843Y7vPZ7hfzjTjAyvXDV_EV2pqEzkhWtQZTrftOwFsWcc_0Ksc7x6qn&_nc_ohc=NyCvWVKTwUUAX85FWEr&_nc_ht=scontent.fdac134-1.fna&cb_e2o_trans=q&oh=03_AdQ5sHFkTja1YwI1MfAxM16_zkqtUzap9QMfV_67Q6ivTg&oe=6536322B" alt='logo' />
            </div>
            <div className="w-1/3 lg:w-2/3">
                <AppBar position="static" className="navMenuBar" elevation={0}>
                    <Toolbar className='navMenuSubBar' >
                        <div className='desktopMenu'>
                          <Button color="inherit">
                              <Link to='/admin/panel'>userinfo</Link>
                          </Button>
                          <Button color="inherit">
                              <Link to='/admin/blogwrite'>Blogs</Link>
                          </Button>
                          <Button color="inherit">
                            <Link to='/admin/events'>events</Link>
                          </Button>
                          <Button color="inherit">
                            <Link to='/admin/judge'>judge</Link>
                          </Button>
                          <Button color="inherit" onClick={()=>logoutFunc()} >
                            <p className='bg-red-600 p-2 rounded-lg'>Logout</p>
                          </Button>
                        </div>
                        <IconButton
                          color="inherit"
                          aria-label="menu"
                          onClick={handleMenuToggle}
                          edge="start"
                          className='navLeftBarButton'
                        >
                          <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    
                </AppBar>     
                <Drawer
                  anchor="left"
                  open={isMenuOpen}
                  onClose={handleMenuToggle}
                >
                  <div style={{ width: 200 }}>
                    <MenuItem onClick={handleMenuToggle}>Home</MenuItem>
                    <MenuItem onClick={handleMenuToggle}>Services</MenuItem>
                    <MenuItem onClick={handleMenuToggle}>About</MenuItem>
                    <MenuItem onClick={handleMenuToggle}>Contact</MenuItem>
                  </div>
                </Drawer>
            </div>
        </div>  
    </>
  )
}

export default Adminnavbar