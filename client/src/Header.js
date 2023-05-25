import React from 'react';
import './Header.css';
import { IconButton } from '@mui/material';
import Person2Icon from '@mui/icons-material/Person2';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className='Header'>
      <IconButton>
        <Person2Icon fontSize='large' className='Header_icon' />
      </IconButton>
      <img
        className='Header_logo'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRao2WvdHvsW02_kyWWsVu6AUqdcBuz0PmpW70FfagRSQ&s'
        alt=''
      />
      <IconButton>
        <ForumIcon fontSize='large' className='Header_icon' />
      </IconButton>
    </div>
  );
}

export default Header;
