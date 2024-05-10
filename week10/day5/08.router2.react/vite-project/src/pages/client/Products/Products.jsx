import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import controller from "../../../services";
import Grid from "@mui/material/Grid";
import mainContext from "../../../context/Context";

const MyProducts = () => {
  const {addToBasket}=useContext(mainContext)
  const [data, setData] = useState([]);
  useEffect(() => {
    controller.getAll("products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <Grid className="GridP" container spacing={4}>
      {data &&
        data.map((e) => (
          <Grid key={e.id} item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia sx={{ height: 320 }} image={e.imgSrc} title={e.name} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {e.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sale Price: {e.salePrice}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Delete</Button>
                <Button size="small">Detail</Button>
                <Button size="small" onClick={()=>{
                  addToBasket(e)
                }}>Basket</Button>

              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};
export default MyProducts;
