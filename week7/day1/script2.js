const product=document.getElementById("product")

class Product{
    static id=1
    constructor(name,img,price){
        this.id=Product.id++;
        this.name=name;
        this.img=img;
        this.price=price;
    }

}
let product1=new Product("snickers","https://upload.wikimedia.org/wikipedia/commons/9/97/Snickers-broken.png",300)
let product2=new Product("twix","https://bazarstore.az/cdn/shop/products/30006824_8944815f-ddca-41a6-89b1-2ec43ff3bf8f.jpg?v=1693552134",300)

let arr = []
arr.push(product1,product2)
renderUI(arr)
function renderUI(arr){
     product.innerHTML='';
    for(let i=0;i<arr.length;i++){
        product.innerHTML +=`
        <div class="card" style="width: 18rem">
        <img
          src="${arr[i].img}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title"> ${arr[i].name}</h5>
          <p class="card-text">
          ${arr[i].price}
          </p>
          <button data-id=${arr[i].id}  type="button" class="btn basket btn-primary">Basket</button>
          <button type="button" class="btn btn-primary">Delete</button>
        </div>
        </div>
        `
        let basketBtns=document.querySelectorAll(".basket")
        basketBtns.forEach(basketBtn=>basketBtn.addEventListener("click",function(){
            console.log(typeof this.getAttribute("data-id"))
        }))
    }
}

