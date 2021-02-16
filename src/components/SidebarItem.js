import React from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = ({Icon,title,url}) => {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon whiteIcon"/>} 
            {Icon ? (<Link  to={url?url:'/'}><h3>{title}</h3></Link>):(<h3 className="sidebarOption__name"><Link to={url?url:'/'}>{title}</Link></h3>)}
        </div>
    )
}

export default SidebarItem
