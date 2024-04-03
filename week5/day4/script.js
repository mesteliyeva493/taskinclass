// class product{
//     constructor(id,name,price){
//         this.id=id;
//         this.name=name;
//         this.price=price;
//     }

// }
// class Milk extends product{
//     constructor(id,name,price,FatPercent,MadeIn){
//         super(id,name,price);
//         this.FatPercent =FatPercent,
//         this.MadeIn=MadeIn;
//     }
// }


// let milk1=new Milk(1,"Milla",25,50,"Azerbaijan")
// let milk2=new Milk(2,"Atena",20,40,"Azerbaijan")
// let milk3=new Milk(3,"Palsud",18,35,"Azerbaijan")

// console.log(milk1)
// console.log(milk2)
// console.log(milk3)

//task1.1
// const milkArrey=[milk1,milk2,milk3];
// console.log(milkArrey)

// task1.2
// let milks=[milk1,milk2,milk3]
// const found =milks.find((id)=>id=10)
// console.log(found)


// function productId(products,id){
//     let finded=products.find(product=>product.id === id)
//     return  finded
// }
// console.log(productId(milkArrey,2))




// task1.3

// function fatAverage(milkArrey)


// task1.4
// function filteredArr(milkArrey){
//     const filtermMilk=milkArrey.filter(milk=>milk.FatPercent>40)
//    return filtermMilk
// }
// console.log(filteredArr(milkArrey))


// task1.5
// function iPrice(array,number){
//     array.forEach(element => {
//       console.log(element.price=element.price+number);
//      });
// }
// iPrice(milkArrey,20)


// 1.6

// function tPrice(array){
//     const totalprice=array.reduce((total, item)=>total+item.price, 0)
//     return totalprice

// }
// console.log(tPrice(milkArrey))