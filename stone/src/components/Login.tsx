import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import { Link as Linker } from 'react-router-dom';
import {LockOutlined} from '@mui/icons-material';
import {FormControlLabel} from '@mui/material';
import Checkbox from '@mui/material';
const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:600, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#009be5'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                     <Avatar style={avatarStyle}><LockOutlined/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth><Link href="/display" >Sign in</Link></Button>
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

export default Login