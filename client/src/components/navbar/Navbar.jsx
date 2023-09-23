import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import '../../styles/Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
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
  return (
    <>
        <div className='shadow-md navbar'>
            <div className="w-2/3 lg:w-1/3 navImageBar">
                <img src="https://scontent.fdac134-1.fna.fbcdn.net/v/t1.15752-9/379632864_268564288977245_6798777286855907046_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFe8QxqD8DI9bTUo0E8UtlsfrXPfUs9JG9-tc99Sz0kbxlzHBL0DKG0DOLpKqHMnRG_GZBNw8KSb0H3jAQ5MoVn&_nc_ohc=JDGyKtv--BYAX8CZ112&_nc_oc=AQn7vbwCwQ3gl-Asbya9tPsKWC1CQA-Mqzn9M9ZrPhTdwdX2V5q9XSuzom6SIjCEGTY&_nc_ht=scontent.fdac134-1.fna&cb_e2o_trans=q&oh=03_AdSAKrx8cGuB47G1dU0kWHVDNb94eOuLX7hNJRbTkbmxSw&oe=653635A5" alt='logo' />
            </div>
            <div className="w-1/3 lg:w-2/3">
                <AppBar position="static" className="navMenuBar" elevation={0}>
                    <Toolbar className='navMenuSubBar' >
                        <div className='desktopMenu'>
                          <Button color="inherit">
                              <Link to='/'>HOME</Link>
                          </Button>
                          <Button color="inherit" onClick={handleSubmenuClick}>
                              Pages
                          </Button>
                          <Button color="inherit">
                              <Link to='/blogs'>Blogs</Link>
                          </Button>
                          <Menu
                              anchorEl={submenuAnchorEl}
                              open={Boolean(submenuAnchorEl)}
                              onClose={handleSubmenuClose}
                          >
                              <MenuItem onClick={handleSubmenuClose}><Link to='/achievements'>Achievements</Link></MenuItem>
                              <MenuItem onClick={handleSubmenuClose}><Link to='/executives'>Executives</Link></MenuItem>
                              <MenuItem onClick={handleSubmenuClose}><Link to='/activities'>Activities</Link></MenuItem>
                          </Menu>
                          <Button color="inherit">
                            <Link to='/about'>ABOUT</Link>
                          </Button>
                          <Button color="inherit" onClick={handleClick}>
                            <Link to='/competitions'>Competitions</Link>
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

export default Navbar