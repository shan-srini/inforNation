import React from 'react';
import './NavMenu.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';

const NavMenu = ({ closeMenu }) => {
    return (
      <div className='menu-inner-container'>
        <div className='menu'>
          <div className='menu-top-bar'>
            <MenuIcon className='inner-menu-icon-button' />
            <Typography variant='h3'>Menu</Typography>
          </div>
        </div>
        <div onClick={closeMenu} className='menu-close-space' />
      </div>
    )
  }

  export default NavMenu;