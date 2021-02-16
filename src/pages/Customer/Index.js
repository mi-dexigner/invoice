import React from 'react'
import Layout from '../../components/Layout'
import { Paper,Table, TableBody, TableContainer, TableHead,TableFooter, TableRow,TableCell, TablePagination, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Customer = () => {
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon',email:'snowjon@yopmail.com', phone:'+1-202-555-0103'},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei',email: 'cerseilannister@yopmail.com', phone: '+1-202-555-0190' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime',email: 'lannisterjaime@yopmail.com', phone:'+1-202-555-0128' },
        { id: 4, lastName: 'Stark', firstName: 'Arya',email: 'starkarya@yopmail.com', phone:'+1-202-555-0138' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',email: 'targaryen@yopmail.com', phone:'+1-202-555-0115' },
        { id: 6, lastName: 'Melisandre', firstName: 'Clifford',email: 'melisandreclifford@yopmail.com', phone: '+1-202-555-0139'},
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara',email: 'ferrara@yopmail.com', phone: '+1-202-555-0107'},
        { id: 8, lastName: 'Frances', firstName: 'Rossini',email: 'rossini@yopmail.com', phone: '+1-202-555-0189' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey',email: 'harvey@yopmail.com', phone: '+1-202-555-0127'},
        { id: 10, lastName: 'Arya', firstName: 'Melisandre',email: 'aryamelisandre@yopmail.com', phone: '+1-202-555-0155' },
      ];
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    return (
        <Layout>
           <TableContainer component={Paper}>
               <Table aria-label="custom pagination table">
               <TableHead>
                   <TableRow>
                       <TableCell>Name</TableCell>
                       <TableCell>Email</TableCell>
                       <TableCell>Phone</TableCell>
                       <TableCell>Action</TableCell>
                   </TableRow>
               </TableHead>
               <TableBody>
               {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                 <TableRow key={row.id}>
                 <TableCell>{`${row.firstName} ${row.firstName}`}</TableCell>
                 <TableCell>{row.email}</TableCell>
                 <TableCell>{row.phone}</TableCell>
                 <TableCell>
                   <IconButton color="primary"><EditIcon/></IconButton>
                   <IconButton color="secondary"><DeleteIcon/></IconButton>
                   </TableCell>
             </TableRow>
               ))}
               </TableBody>
               <TableFooter>
                 <TableRow>
                 <TablePagination
        rowsPerPageOptions={[10, 50, 100,999]}
        component="td"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
                 </TableRow>
                 </TableFooter>
               </Table>
           </TableContainer>
         
        </Layout>
    )
}

export default Customer
