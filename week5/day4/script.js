class Device {
    constructor(

        Brand,
        Model,
        Screensize,
        Batterylevel,
        price,
        SalePrice,
        DiscountPercentage,
        Salecount
    )
  {
    this.Brand=Brand;
    this.Model=Model;
    this.Screensize=Screensize
    this.Batterylevel=Batterylevel
    this.price=price
    this.SalePrice=SalePrice
    this.DiscountPercentage=DiscountPercentage
    this.Salecount=Salecount
    
  }
  calculateProfit(){
 let profit=0
    if(this.DiscountPercentage>0){
        let lastPrice=this.SalePrice-(this.SalePrice*this.DiscountPercentage/100)
        profit= (lastPrice*this.Salecount)-(this.price*this.Salecount)
          return profit
    }else{
        profit= (this.SalePrice*this.Salecount)-(this.price*this.Salecount)
    }
  }
displayBatteryLevel(){
    console.log(`Battery Level: ${this.Batterylevel}%`
    )
  }
  displayDetails(){
    console.log(`Brand:${this.Brand}`,`Model:${this.Model}`,`Screensize:${this.Screensize}`)
  }
}
class Phone extends Device{
    constructor( Brand,
        Model,
        Screensize,
        Batterylevel,
        price,
        SalePrice,
        DiscountPercentage,
        Salecount,
        isSmart
    )
    {
        super( Brand,
            Model,
            Screensize,
            Batterylevel,
            price,
            SalePrice,
            DiscountPercentage,
            Salecount)
            this.isSmart=isSmart
    }

}
class Laptop extends Device{
     constructor(
            Brand,
            Model,
            Screensize,
            Batterylevel,
            price,
            SalePrice,
            DiscountPercentage,
            Salecount,
            isRGBkeyboard 
            
     )
     {
        super(  Brand,
            Model,
            Screensize,
            Batterylevel,
            price,
            SalePrice,
            DiscountPercentage,
            Salecount,)
            this.isRGBkeyboard=isRGBkeyboard
     }
}


const Phone1=new Phone("samsung","A32"," 5.8inches",80,500,600,8,30,true);
const Phone2=new Phone("Iphone","11","5.9 inches",90,1700,1800,10,15,true)


const Laptop1=new Phone("Dell","xps 15"," 15.8inches",90,1500,1400,7,30,true);
const Laptop2=new Phone("Hp","spectre","15.9 inches",80,1700,1500,8,20,true);
console.log(Laptop1.calculateProfit())
const product =[Phone1,Phone2,Laptop1,Laptop1]

console.log(product)

 function FilterbyPrice(arrey,price){
    let result=arrey.filter(product=>product.price>price)
   let lastResult= result.map(product=>product.Brand)
       return lastResult
 }
 console.log(FilterbyPrice(product,1000))


 function FilterbyName(arrey,name){
    return arrey.filter(product=>product.Brand===name)
 }

 console.log(FilterbyName(product,"Iphone"))




function GetTotalProfit(arrey){

    let result=arrey.reduce((totalProfit,product)=>totalProfit+product.price,0)
      return result
 
}

console.log(GetTotalProfit(product))