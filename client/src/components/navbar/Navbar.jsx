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
import {useNavigate, Link} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
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

    // window.addEventListener("scroll",function(){
    //   document.querySelector(".navbar").classList.toggle("navbarSticky",window.scrollY > 80);
    // });
  return (
    <>
        <div className=' navbar'>
            <div className="w-2/3 lg:w-1/4 navImageBar">
                <img src="/IUTCSLogo.png" alt='logo' data-aos="fade-left" data-aos-delay="0" data-aos-anchor-placement="center-bottom"/>
            </div>
            <div className="w-1/3 lg:w-3/4">
                <AppBar position="static" className="navMenuBar" elevation={0}>
                    <Toolbar className='navMenuSubBar' >
                        <div className='desktopMenu'>
                          <Button color="inherit" data-aos="fade-right" data-aos-delay="0" data-aos-anchor-placement="center-bottom"
                          onClick={() => navigate('/')}>
                             HOME
                          </Button>
                          <Button color="inherit"  data-aos="fade-right" data-aos-delay="50" data-aos-anchor-placement="center-bottom"
                            onClick={() => navigate('/about')}>
                              About
                          </Button>
                          <Button color="inherit" data-aos="fade-right" data-aos-delay="100" data-aos-anchor-placement="center-bottom"
                            onClick={() => navigate('/activities')}>
                              Activities
                          </Button>
                          <Button color="inherit" data-aos="fade-right" data-aos-delay="150" data-aos-anchor-placement="center-bottom"
                            onClick={() => navigate('/achievements')}>
                              Achievements
                          </Button>
                          <Button color="inherit" data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="center-bottom"
                            onClick={() => navigate('/blogs')}>
                              Blogs
                          </Button>
                          <Button color="inherit" data-aos="fade-right" data-aos-delay="250" data-aos-anchor-placement="center-bottom"
                            onClick={() => navigate('/executives')}>
                              Executives
                          </Button>
                          <Button color="inherit" data-aos="fade-right" data-aos-delay="300" data-aos-anchor-placement="center-bottom"
                            onClick={() => navigate('/events')}>
                            <Link to='/events' className='bg-white text-black px-3 py-2 rounded-lg'>Competitions</Link>
                          </Button>
                          {/* <Button color="inherit" onClick={handleSubmenuClick}  data-aos="fade-right" data-aos-delay="300" data-aos-anchor-placement="center-bottom">
                              Programs
                          </Button> */}
                          {/* <Button color="inherit"  data-aos="fade-right" data-aos-delay="500" data-aos-anchor-placement="center-bottom">
                            <Link to='/contacts'>contacts</Link>
                          </Button> */}
                         
                          <Menu
                              anchorEl={submenuAnchorEl}
                              open={Boolean(submenuAnchorEl)}
                              onClose={handleSubmenuClose}
                          >
                              <MenuItem onClick={handleSubmenuClose}><Link to='/achievements'>Achievements</Link></MenuItem>
                              <MenuItem onClick={handleSubmenuClose}><Link to='/executives'>Executives</Link></MenuItem>
                              <MenuItem onClick={handleSubmenuClose}><Link to='/activities'>Activities</Link></MenuItem>
                          </Menu>
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
                    <MenuItem onClick={handleMenuToggle} onClick={() => navigate('/')}>HOME</MenuItem>
                    <MenuItem onClick={handleMenuToggle} onClick={() => navigate('/blogs')}>BLOGS</MenuItem>
                    <MenuItem onClick={handleMenuToggle} onClick={() => navigate('/about')}>ABOUT</MenuItem>
                    <MenuItem onClick={handleMenuToggle} onClick={() => navigate('/activities')}>ACTIVITIES</MenuItem>
                    <MenuItem onClick={handleMenuToggle} onClick={() => navigate('/achievements')}>ACHIEVEMENTS</MenuItem>
                    <MenuItem onClick={handleMenuToggle} onClick={() => navigate('/executives')}>EXECUTIVES</MenuItem>
                    <MenuItem onClick={handleMenuToggle} onClick={() => navigate('/contacts')}>CONTACTS</MenuItem>
                    <MenuItem onClick={handleMenuToggle}><Link to='/events' className='bg-white text-black px-3 py-2 rounded-lg'>COMPETITION</Link></MenuItem>
                  </div>
                </Drawer>
            </div>
        </div>  
    </>
  )
}

export default Navbar