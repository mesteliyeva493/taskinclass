
const API = "https://fakestoreapi.com/products"
const list = document.querySelector(".row")
function getProducts() {
  fetch(API)
    .then(response => response.json())
    .then((data) => renderProduct(data))
    .catch(err => console.log(err))
}
getProducts()

function renderProduct(data) {
  data.map((product) => {
    list.innerHTML += `
    <div class="col-3 g-4">
    <div class="card" style="min-height:550px ;">
      <img height="250" src=${product.image} class="card-img-top object-fit-contain " alt="..." />
      <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-price"><span>Price:</span> ${product.price}</p>
            <p class="card-category"><span>category:</span> ${product.category}</p>
            <p class="card-Rating"><span>rating:</span>  ${product.rating.rate}</p>
            <a href="detail.html?id=${product.id}" class="btn btn-primary">info</a>
          </div>
    </div>
  </div>
    `
  })
}
