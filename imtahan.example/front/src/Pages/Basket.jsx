import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import mainContext from "../Context/Context";
import { Button } from "@mui/material";

function Basket() {
  const { basket } = useContext(mainContext)
  console.log(basket)
  return (
    <div>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >name</TableCell>
         
            <TableCell >price</TableCell>
            <TableCell >image</TableCell>
            <TableCell>count</TableCell>
            <TableCell>decrease</TableCell>
            <TableCell>increse</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {basket && basket.map((item,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell >{item.clothes.name}</TableCell>
              <TableCell >{item.clothes.price}</TableCell>
              <TableCell ><img width={60} height={60} src={item.clothes.img}/></TableCell>
             <TableCell>{item.count}</TableCell>
              <TableCell > <Button>decrease</Button></TableCell>
              
              <TableCell ><Button>increse</Button></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
      
    </div>
  );
}

export default Basket;
