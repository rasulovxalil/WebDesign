import React from 'react';
import Grid from '@mui/material/Grid';
import mediaspeech from './mediaspeech.svg'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import logout from './logout.svg';
import { Link } from 'react-router-dom';

export default function Header() {

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 310,
    height: 48,
    textAlign: 'center',
    backgroundColor:" #F4F2FF",
    alignItems:"center"
  }));

  return (
    <Grid container spacing={2}   justifyContent="space-between">
      <Grid item xs={6} >

        <Grid container spacing={2} paddingLeft={"10%"}>
          <Grid item xs={4}>
            <Box
              component="img"
              src={mediaspeech}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Grid container spacing={0.5}   justifyContent="flex-end"
        alignItems="center">
          <Grid item xs={4}>
            <Box
              sx={{
                display: 'flex',
            
                '& > :not(style)': {
                  m: 1,
                  width: 310,
                  height: 38,
                },
              }}
            >
            <DemoPaper variant="elevation">Hello! demo@mediaspeech.com</DemoPaper>

            </Box>
          </Grid>

          <Grid item xs={4} justifyContent="flex-end"
            alignItems="center">
            <Link to="/">
            <Button variant="contained" style={{
              background: '#F9CDCD',
              color: '#5C1313',
              fontSize: 'Poppins',
              fontWeight: "500"

            }}><Box
                component="img"
                src={logout}

              /> Logout</Button>
              </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>



  )
}
