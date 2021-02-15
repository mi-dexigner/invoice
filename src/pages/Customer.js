import React from 'react'
import Layout from '../components/Layout'

const Customer = () => {
    return (
        <Layout>
           <table>
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Phone</th>
                       <th>Action</th>
                   </tr>
               </thead>
               <tbody>
               <tr>
                       <td>Name</td>
                       <td>Email</td>
                       <td>Phone</td>
                       <td>Action</td>
                   </tr>
               </tbody>
           </table>
        </Layout>
    )
}

export default Customer
