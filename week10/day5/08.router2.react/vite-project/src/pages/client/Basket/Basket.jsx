import React, { useContext } from 'react'
import mainContext from '../../../context/Context'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function Basket() {

  const {basket,decrease,increase,deleteBasket}=useContext(mainContext)
  console.log(basket)
  
  return (
    
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">count</TableCell>
            <TableCell align="right">decrease</TableCell>
            <TableCell align="right">increase</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>

          <TableBody>
          {basket.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product.name}
              </TableCell>
              <TableCell align="right">{row.count}</TableCell>
              <TableCell align="right">{row.totalPrice}</TableCell>
              <TableCell align="right"><button onClick={()=>{
                decrease(row)
              }}>decrease</button></TableCell>
              <TableCell align="right"><button onClick={()=>increase(row)}>increase</button></TableCell>
              <TableCell align="right"><button onClick={()=>{
                deleteBasket(row)
              }}>delete</button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        </Table>
    </TableContainer>
   
  )
}

export default Basket