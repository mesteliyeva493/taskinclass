import React, { useContext } from 'react'
import {Helmet} from "react-helmet";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import mainContext from '../Context/Context';
import { Button } from '@mui/material';
function Basket() {
  const {basket,deleteBasket,decrease,increase}=useContext(mainContext)
  console.log(basket)
  return (
    <>
        <Helmet>
            <title>Basket</title>
        </Helmet>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell >name</TableCell>
            <TableCell >price</TableCell>
            <TableCell >img</TableCell>
            <TableCell >count</TableCell>
            <TableCell >decrease</TableCell>
            <TableCell > increase</TableCell>
            <TableCell>Total Price</TableCell>
            <TableCell >delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((item,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell >{item.product.title}</TableCell>
              <TableCell >{item.product.price}</TableCell>
              <TableCell >{item.product.img}</TableCell>
              <TableCell >{item.count}</TableCell>
            <TableCell ><Button onClick={()=>increase(item)}> increase</Button></TableCell>
            <TableCell ><Button onClick={()=>decrease(item)}> decrease</Button></TableCell>
            <TableCell ><Button onClick={()=>deleteBasket(item)}> delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Basket