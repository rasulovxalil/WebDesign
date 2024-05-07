import * as React from 'react';
//import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
//import { Grid } from '@mui/material';
import { Grid,Paper,Avatar, TextField, Button, Typography,Link } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//import TextField from '@mui/material/TextField';
//import Typography from '@mui/material/Typography';
import { useState } from 'react';



export default function Login() {
  const paperStyle={padding :20,height:'30vh',width:280, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
  const [loginfo,setLoginfo] = useState("")
  const [logpassw,setLogpassw] = useState("")
  function submitInfo(){
    console.log(loginfo)
    console.log(logpassw)
  }
  return (
    <Grid sx={{paddingTop:"10%"}}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Grid container spacing={2}>
                <Grid item sx={{width:"100%"}}>
                <TextField label='Username' placeholder='Enter username' fullWidth required  value={loginfo} onChange={(e)=>setLoginfo(e.target.value)}/>
                </Grid>
                <Grid item sx={{width:"100%"}}>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required value={logpassw} onChange={(e)=>setLogpassw(e.target.value)}/>
                </Grid>
                </Grid>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={()=>submitInfo()}>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}