import React from 'react'
import { Box, Card, CardContent, Container,Typography,makeStyles, createStyles, Avatar, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
    const Forgot = () => {
      const classes = useStyles();

    const handleSubmit = (e)=>{
    e.preventDefault();
    alert();
    }
    return (
        
            <Box className={classes.mainWrapper} flexWrap="nowrap" alignItems="center" justifyContent="center" display='flex' component="section">
        <Container maxWidth='sm'>
            <Card>
            <CardContent>
            <Avatar alt="Remy Sharp" className={classes.logo} />
            <Typography variant="h5" component="div" className={classes.heading}>Forgot Password</Typography>
            <form onSubmit={handleSubmit}>
             {/* being email field */}
             <Box id="email" mb={3} component="div">
             <TextField variant="outlined" label="Email Address" type="email" className={classes.inputField} fullWidth />
             </Box>
             {/* end email field */}
              {/* being form submit */}
             <Button variant="outlined" color="primary" type="submit" className={classes.inputFieldButton} size="large" disableElevation disabled  fullWidth> Reset Password</Button>
             {/* end form submit */}
             <Box mt={1}  mb={3} component="div" width={1}>
                 <Link to="/login">Login</Link>
             </Box>
             </form>
            </CardContent>
            </Card>
        </Container>
            </Box>
    )
}

export default Forgot
