import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button key="one" href="/MyProfile" variant="contained" sx={{backgroundColor: "#CFDDD7", color: "black", '&:hover': { backgroundColor: 'white'}}}>Login</Button>,

  <Button className="hover:bg-slate-500" key="three" href="/MyProfile" variant="contained" sx={{backgroundColor: "#CFDDD7", color: "black", '&:hover': { backgroundColor: 'white'}}}>Sign Up</Button>,
];

export default function LoginButtonGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}

