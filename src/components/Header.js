import React from 'react'
import {makeStyles, AppBar, Typography, Button, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

 
const Header = ({signOut,user}) => {
 
    const classes = useStyles();

    return (
        <header className={classes.root}>
           <AppBar position="static">
           <Toolbar>
           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
           <Typography variant="h6" className={classes.title}>InVoice</Typography>
    <Button color="inherit" onClick={signOut}>Logout</Button>
    </Toolbar>
           </AppBar>
        </header>
    )
}

export default Header
