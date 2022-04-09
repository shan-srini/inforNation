import React from 'react';
import './NavMenu.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';

import { NavMenuListing, SavedPosts, Profile, Settings } from '../'

const NavMenu = ({ closeMenu }) => {
  const menuListings = [
    <NavMenuListing label='About'/>,
    <NavMenuListing label='Saved' href='google.com' Icon={SavedPosts} iconHeight='48' iconWidth='24' iconStroke='white' />,
    <NavMenuListing label='Profile' Icon={Profile} iconHeight='24' iconWidth='24' iconStroke='white' />,
    <NavMenuListing label='Settings' Icon={Settings} iconHeight='24' iconWidth='24' iconStroke='white' />,
  ]

  return (
    <div className='menu-inner-container'>
      <div className='menu'>
        <div className='menu-top-bar'>
          <MenuIcon onClick={closeMenu} className='inner-menu-icon-button' />
          <Typography variant='h3'>Menu</Typography>
        </div>  

        {menuListings.map((MenuListing) => MenuListing)}

      </div>
      <div onClick={closeMenu} className='menu-close-space' />
    </div>
  )
}

export default NavMenu;
