import React, { useState } from 'react'
import { Box, Card, CardContent, Container,Typography,makeStyles, createStyles, Avatar, TextField, Button } from '@material-ui/core';
import { Link} from 'react-router-dom';
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


const useStyles = makeStyles((theme: Theme) => createStyles({
    mainWrapper: {
      height:'100vh',
      textAlign:'center'
    },
    logo: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:theme.spacing(1)
      },
      heading:{
        marginBottom:theme.spacing(2)
      },
     inputField:{
        maxWidth:'400px'
      },
     inputFieldButton:{
        maxWidth:'350px'
      }
  }));
    const Login = () => {
      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('');
      const [state,dispatch] = useStateValue();
      const classes = useStyles();
    const handleSubmit = (e)=>{
      e.preventDefault();
     auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var userResponse = userCredential.user;
        var user = {
          name : userResponse.displayName,
  email : userResponse.email,
  photoUrl : userResponse.photoURL,
  emailVerified : userResponse.emailVerified,
  uid : userResponse.uid,
        }
        console.log(state);
        if(user){
         dispatch({
          type: actionTypes.SET_USER,
          user:user
      }) 
    
      //alert('working')
      }
      })
      .catch((error) => alert(error));

    }
    return (
      //createUserWithEmailAndPassword(email,password)
        // devs@yopmail.com
            <Box className={classes.mainWrapper} flexWrap="nowrap"  justifyContent="center" display='flex' component="section">
        <Container maxWidth='sm'>
            <Card>
            <CardContent>
            <Avatar alt="Remy Sharp" className={classes.logo} />
            <Typography variant="h5" component="div" className={classes.heading}>Login In</Typography>
            <form onSubmit={handleSubmit}>
             {/* being email field */}
             <Box id="email" mb={3} component="div">
             <TextField 
             variant="outlined"
            label="Email Address" 
            type="email" 
            value={email}
            className={classes.inputField} 
            onChange={(e)=>setEmail(e.target.value)}
            fullWidth
            />
             </Box>
             {/* end email field */}
             {/* being password field */}
             <Box id="password" mb={3} component="div">
             <TextField 
             variant="outlined" 
             label="Password" 
             type="password" 
             value={password}
             className={classes.inputField}
             onChange={(e)=>setPassword(e.target.value)}
             fullWidth
             />
             </Box>
             {/* end password field */}
              {/* being form submit */}
             <Button variant="outlined" color="primary" type="submit" 
             className={classes.inputFieldButton} size="large" 
             disableElevation disabled={!password}   fullWidth >LogIn</Button>
             {/* end form submit */}
             <Box mt={1}  mb={3} component="div" width={1}>
                 <Link to="/forgot-password">Forget password</Link>
             </Box>
             </form>
            </CardContent>
            </Card>
        </Container>
            </Box>
    )
}

export default Login
