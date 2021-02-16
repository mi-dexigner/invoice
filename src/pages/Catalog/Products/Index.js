import React from 'react'
import Layout from '../../../components/Layout'
import { Paper,Table, TableBody, TableContainer, TableHead,TableFooter, TableRow,TableCell, TablePagination, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Products = () => {
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const rows = [
        { id: 1, name: 'Snow', category: 'Jon',quantity:'snowjon@yopmail.com', price: 35,tax:'No Tax',status:'active' },
        { id: 2, name: 'Lannister', category: 'Cersei',quantity: 'cerseilannister@yopmail.com', price: 42,tax:'No Tax',status:'active' },
        { id: 3, name: 'Lannister', category: 'Jaime',quantity: 'lannisterjaime@yopmail.com', price: 45,tax:'No Tax',status:'active' },
        { id: 4, name: 'Stark', category: 'Arya',quantity: 'starkarya@yopmail.com', price: 16,tax:'No Tax',status:'inactive' },
        { id: 5, name: 'Targaryen', category: 'Daenerys',quantity: 'targaryen@yopmail.com', price: 45,tax:'9%',status:'active' },
        { id: 6, name: 'Melisandre', category: 'Clifford',quantity: 'melisandreclifford@yopmail.com', price: 150,tax:'9%' ,status:'inactive'},
        { id: 7, name: 'Clifford', category: 'Ferrara',quantity: 'ferrara@yopmail.com', price: 44,tax:'9%',status:'active' },
        { id: 8, name: 'Frances', category: 'Rossini',quantity: 'rossini@yopmail.com', price: 36,tax:'No Tax',status:'active' },
        { id: 9, name: 'Roxie', category: 'Harvey',quantity: 'harvey@yopmail.com', price: 65,tax:'No Tax',status:'active' },
        { id: 10, name: 'Arya', category: 'Melisandre',quantity: 'aryamelisandre@yopmail.com', price: 65,tax:'18%' ,status:'inactive'},
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
                       <TableCell>Category</TableCell>
                       <TableCell>Quantity</TableCell>
                       <TableCell>Price</TableCell>
                       <TableCell>Tax</TableCell>
                       <TableCell>Status</TableCell>
                       <TableCell>Action</TableCell>
                   </TableRow>
               </TableHead>
               <TableBody>
               {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                 <TableRow key={row.id}>
                 <TableCell>{row.name}</TableCell>
                 <TableCell>{row.category}</TableCell>
                 <TableCell>{row.quantity}</TableCell>
                 <TableCell>{row.price}</TableCell>
                 <TableCell>{row.tax}</TableCell>
                 <TableCell>{row.status}</TableCell>
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

export default Products
