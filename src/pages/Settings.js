import { Grid } from '@material-ui/core'
import React from 'react'
import Layout from '../components/Layout'

const Settings = () => {
    
    return (
        <Layout title="Settings">
             <Grid container spacing={3}>
             <Grid item md={6} className="border">1</Grid>
             <Grid item md={6} className="border">2</Grid>
             </Grid>
        </Layout>
    )
}

export default Settings
