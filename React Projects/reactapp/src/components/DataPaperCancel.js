import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function DataPaper({ url }) {
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: "95%",
    height: "20px",
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    backgroundColor:"#FDF1F1",
    
  }));
  return (

    <DemoPaper variant="elevation" elevation={0}>
      <Grid container spacing={2}   direction="row"
      justifyContent="space-between"
      alignItems="center">
        <Grid item xs={12} md={6}>
        <Grid container spacing={2}   direction="row"
      justifyContent="flex-start"
      alignItems="center">
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "18px",
              color: "#944646"
            }}
          >
            {url}

          </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
        <Grid container spacing={2}   direction="row"
      justifyContent="flex-end"
      alignItems="center">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '122', height: "40" },
            }}

          >
            <Button variant="text" component="label"
              role={undefined}

              tabIndex={-1}
              style={{ backgroundColor: "#D32F2F", color: "#FFFFFF", }}>

              Canceled
             
            </Button>
   
            </Box>
            </Grid>
        </Grid>
      </Grid>
    </DemoPaper>


  )
}