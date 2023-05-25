import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';
import './SwipeButtons.css';

function SwipeButtons() {
  return (
    <div className='SwipeButtons'>
      <IconButton className='SwipeButtons_repeat'>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className='SwipeButtons_left'>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='SwipeButtons_star'>
        <StarRateIcon fontSize='large' />
      </IconButton>
      <IconButton className='SwipeButtons_right'>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButton_lightning'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
