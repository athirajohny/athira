import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Button from '@mui/material/Button';
import Menu from './Menu';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '90%',border: 1 }}
      style={{color: "gray"}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <Menu />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search users"
        inputProps={{ 'aria-label': 'search users' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        {/* <SearchIcon /> */}
        <Button variant="contained" color="success">Search</Button>
      </IconButton>
     
      {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
        <Button variant="contained" color="success">Search</Button>
      </IconButton> */}
    </Paper>
  );
}
