import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
    return (
        <main className="wrapper" >
            <Sidebar />
           <div className="containArea">
           <Header />
           <div className="content">
           {children}
           </div>
           </div>

        </main>
    )
}

export default Layout
