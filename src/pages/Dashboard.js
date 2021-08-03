import React from 'react'
import Layout from '../components/Layout'
import { makeStyles ,Grid, Paper, Box, Typography } from '@material-ui/core'
import CategoryIcon from '@material-ui/icons/Category';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
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
        <Paper  className={`tile-stats ${classes.paper}`}>
              <Box  display='flex' flexWrap="nowrap" alignItems="center" justifyContent="space-between">
              <div className="count">2</div>
                  <div><CategoryIcon/></div>
              </Box>
          <Typography variant="h6" component="div">Total Products</Typography>
          </Paper>
        </Grid>
        <Grid item md={3}>
        <Paper className={`tile-stats ${classes.paper}`}>
              <Box  display='flex' flexWrap="nowrap" alignItems="center" justifyContent="space-between">
                  <div className="count">2</div>
                  <div><GroupRoundedIcon/></div>
              </Box>
          <Typography variant="h6" component="div">Total Customers</Typography>
          </Paper>
        </Grid>
        <Grid item md={3}>
        <Paper  className={`tile-stats ${classes.paper}`}>
              <Box  display='flex' flexWrap="nowrap" alignItems="center" justifyContent="space-between">
              <div className="count">2</div>
                  <div><CreditCardRoundedIcon/></div>
              </Box>
          <Typography variant="h6" component="div">Total Estimates</Typography>
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper  className={`tile-stats ${classes.paper}`}>
              <Box  display='flex' flexWrap="nowrap" alignItems="center" justifyContent="space-between">
              <div className="count">2</div>
                  <div><ReceiptRoundedIcon/></div>
              </Box>
          <Typography variant="h6" component="div" >Total Invoice</Typography>
          </Paper>
        </Grid>
      </Grid>
        </Layout>
    )
}

export default Dashboard
