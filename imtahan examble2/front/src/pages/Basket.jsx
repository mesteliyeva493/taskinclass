import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import mainContext from "../context/context";
import { Button } from "@mui/material";

function Basket() {
  const { basket,decreaseItem, increaseItem, deleteBasket } = useContext(mainContext);
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
              <TableCell align="right">name</TableCell>
              <TableCell align="right">img</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">totalprice</TableCell>
              <TableCell align="right">delete</TableCell>
              <TableCell align="right">incrase</TableCell>
              <TableCell align="right">decrease</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.map((item,index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell align="right">{item.product.title}</TableCell>
                <TableCell align="right"> <img width={60} height={60} src={item.product.img} alt="" /></TableCell>
                <TableCell align="right">{item.product.price}</TableCell>
                <TableCell align="right">{item.totalPrice}</TableCell>
                <TableCell align="right"><Button  onClick={() => deleteBasket(item)}>delete</Button></TableCell>
                <TableCell align="right"><Button  onClick={() => increaseItem(item)}>increase</Button></TableCell>
                <TableCell align="right"><Button  onClick={() => decreaseItem(item)}>decrease</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Basket;
