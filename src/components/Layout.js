import { makeStyles, createStyles,Grid, Typography, Button } from '@material-ui/core'
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const useStyles = makeStyles((theme: Theme) => createStyles({
    pageHeader: {
      borderBottom:'2px solid #027cc9',
      marginBottom:theme.spacing(2),
    }

  }));

const Layout = ({children,title,url}) => {
    const classes = useStyles();
    return (
        <main className="wrapper">
            <Sidebar />
           <div className="containArea">
           <Header />
           <div className="content">
           <Grid container spacing={3} direction="row" justify="center" alignItems="center" className={classes.pageHeader}>
             <Grid item md={6} justify="flex-start" container>
             {title && <Typography gutterBottom variant="subtitle1">
                 {title}
                </Typography>}
             </Grid>
             <Grid item md={6} justify="flex-end" container>
             {url &&<Button href={url}>Add new</Button>}
             </Grid>
             </Grid>
           {children}
           </div>
           </div>

        </main>
    )
}

export default Layout
