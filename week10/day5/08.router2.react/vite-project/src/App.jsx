import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/Router";
import "./App.css";
import mainContext from "./context/Context";
import { useState } from "react";
const routes = createBrowserRouter(ROUTES);
function App() {
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );

  const addToBasket = (product) => {
    const target = basket.find((item) => item.id == product.id);
    if (target) {
        target.count += 1,
        (target.totalPrice = target.count * target.product.costPrice);
      setBasket([...basket]);
      localStorage.setItem("basket",JSON.stringify([...basket]));
    } else {
      const newBasketItem = {
        id:product.id,
        product: product,
        count: 1,
        totalPrice: product.costPrice,
      };
      setBasket([...basket, newBasketItem]);
      localStorage.setItem("basket",JSON.stringify([...basket,newBasketItem]));
    }
  };

  const decrease=(product)=>{
    const target=basket.find((item)=>item.id==product.id)
    if(target.count>1){
      target.count-=1,
      target.totalPrice=target.count * target.product.costPrice
    }
    setBasket([...basket])
    localStorage.setItem("basket",JSON.stringify([...basket]))

  }
  const increase=(product)=>{
    const target=basket.find((item)=>item.id==product.id)
    target.count+=1,
    target.totalPrice=target.count * target.product.costPrice
    setBasket([...basket])
    localStorage.setItem("basket",JSON.stringify([...basket]))

  }

  const deleteBasket=(product)=>{
    const target=basket.find((item)=>item.id==product.id)
    basket.splice(basket.indexOf(target),1)
    setBasket([...basket])
    localStorage.setItem("basket",JSON.stringify([...basket]))


  }

  const data = {
    addToBasket,
    basket,
    setBasket,
    decrease,
    increase,
    deleteBasket
  };

  return (
    <mainContext.Provider value={data}>
      <RouterProvider router={routes} />
    </mainContext.Provider>
  );
}

export default App;
