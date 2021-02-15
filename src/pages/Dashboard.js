import { makeStyles ,Grid, Paper, Box, Typography } from '@material-ui/core'
import React from 'react'
import Layout from '../components/Layout'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const Dashboard = () => {
    const classes = useStyles();
    return (
        <Layout>
           <Grid container spacing={3}>
        <Grid item md={3}>
        <Paper className={classes.paper} className="tile-stats">
              <Box  display='flex' flexWrap="nowrap" alignItems="centers" justifyContent="space-between">
              <div className="count">2</div>
                  <div>icon</div>
              </Box>
          <Typography variant="h6" component="div" alignItems="flex-start">Total Products</Typography>
          </Paper>
        </Grid>
        <Grid item md={3}>
        <Paper className={classes.paper} className="tile-stats">
              <Box  display='flex' flexWrap="nowrap" alignItems="centers" justifyContent="space-between">
                  <div className="count">2</div>
                  <div>icon</div>
              </Box>
          <Typography variant="h6" component="div" alignItems="flex-start">Total Products</Typography>
          </Paper>
        </Grid>
        <Grid item md={3}>
        <Paper className={classes.paper} className="tile-stats">
              <Box  display='flex' flexWrap="nowrap" alignItems="centers" justifyContent="space-between">
              <div className="count">2</div>
                  <div>icon</div>
              </Box>
          <Typography variant="h6" component="div" alignItems="flex-start">Total Products</Typography>
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper className={classes.paper} className="tile-stats">
              <Box  display='flex' flexWrap="nowrap" alignItems="centers" justifyContent="space-between">
              <div className="count">2</div>
                  <div>icon</div>
              </Box>
          <Typography variant="h6" component="div" alignItems="flex-start">Total Products</Typography>
          </Paper>
        </Grid>
      </Grid>
        </Layout>
    )
}

export default Dashboard
