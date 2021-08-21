import { Avatar } from '@material-ui/core'
import React from 'react'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import CategoryIcon from '@material-ui/icons/Category';
import PersonIcon from '@material-ui/icons/Person';
import SidebarItem from './SidebarItem';

const Sidebar = ({user}) => {
    //console.log(user?.email)
    return (
        <aside className="sidebar">
           <div className="sidebar__header">
           <Avatar alt="Remy Sharp" src={user?.photoURL} />
           <h2>Welcome, <br/>
           <span>{((user?.displayName)?user?.displayName:user?.email) }</span>
           </h2>
           </div>
           <SidebarItem Icon={DashboardRoundedIcon} title="Dashboard" />
           <SidebarItem Icon={GroupRoundedIcon} title="Customer" url="/customer"  />
           <SidebarItem Icon={CategoryIcon} title="Catalog" url="/catalog"/>
           <SidebarItem Icon={ReceiptRoundedIcon} title="Billing" />
           <SidebarItem Icon={BarChartRoundedIcon} title="Reports" />
           <SidebarItem Icon={PersonIcon} title="Profile" url="/profile" />
           <SidebarItem Icon={SettingsRoundedIcon} title="Settings" url="/settings" />
        </aside>
    )
}

export default Sidebar
