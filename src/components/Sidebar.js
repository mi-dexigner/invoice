import { Avatar, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';

const Sidebar = () => {
    return (
        <aside className="sidebar">
           <List component="nav" aria-label="main mailbox folders"List>
           <ListItem 
           button
        >
             <ListItemIcon><Avatar alt="Remy Sharp" /></ListItemIcon>
          <ListItemText primary="Welcome, John" />
        </ListItem>
           <ListItem  button ><ListItemIcon><DashboardRoundedIcon className="whiteIcon" /></ListItemIcon><ListItemText primary="Dashboard" /></ListItem>
           <ListItem  button ><ListItemIcon><GroupRoundedIcon className="whiteIcon" /></ListItemIcon><ListItemText primary="Customer" /></ListItem>
           <ListItem  button ><ListItemIcon><ReceiptRoundedIcon className="whiteIcon" /></ListItemIcon><ListItemText primary="Billing" /></ListItem>
           <ListItem  button ><ListItemIcon><BarChartRoundedIcon className="whiteIcon" /></ListItemIcon><ListItemText primary="Reports" /></ListItem>
           <ListItem  button ><ListItemIcon><SettingsRoundedIcon className="whiteIcon" /></ListItemIcon><ListItemText primary="Settings" /></ListItem>
           <ListItem  button ><ListItemIcon><ExitToAppRoundedIcon className="whiteIcon" /></ListItemIcon> <ListItemText primary="Logout" /></ListItem>
           
           </List>
        </aside>
    )
}

export default Sidebar
