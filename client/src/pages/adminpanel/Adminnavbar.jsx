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
        localStorage.setItem("localStorageIutcsAdminUsername",'0');
        window.location.href = "/admin/login";

    }
  return (
    <>
        <div className=' navbar'>
            <div className="w-2/3 lg:w-1/4 navImageBar">
                <img src="/IUTCSLogo.png" alt='logo' />
            </div>
            <div className="w-1/3 lg:w-3/4">
                <AppBar position="static" className="navMenuBar" elevation={0}>
                    <Toolbar className='navMenuSubBar' >
                        <div className='desktopMenu'>
                          {/* <Button color="inherit">
                              <Link to='/admin/panel'>userinfo</Link>
                          </Button> */}
                          <Button color="inherit">
                              <Link to='/admin/blogs'>Blogs</Link>
                          </Button>
                          <Button color="inherit">
                            <Link to='/admin/events/view'>events</Link>
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
                  <div className='mobileNavSideBar'>
                    <MenuItem onClick={handleMenuToggle}><Link to='/admin/blogs'>BLOGS</Link></MenuItem>
                    <MenuItem onClick={handleMenuToggle}><Link to='/admin/events/view'>EVENTS</Link></MenuItem>
                    <MenuItem onClick={handleMenuToggle}><Link to='/admin/judge'>JUDGE</Link></MenuItem>
                  </div>
                </Drawer>
            </div>
        </div>  
    </>
  )
}

export default Adminnavbar