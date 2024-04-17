const id=new URLSearchParams(window.location.search).get("id");
const prod=document.querySelector(".prod")

const API = "https://fakestoreapi.com/products"+`/${id}`
const list = document.querySelector(".row")
function getProducts() {
    fetch(API)
      .then(response => response.json())
      .then((data) => renderProduct(data))
      .catch(err => console.log(err))
  }
  getProducts()
  
  function renderProduct(product) {
      prod.innerHTML +=`
      <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${product.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <h5 class="card-Crice">${product.Crice}</h5>
            <h5 class="card-Category">${product.Category}</h5>
            <h5 class="card-Count">${product.Count}</h5>
            <h5 class="card-Description">${product.Description}</h5>
            <br>
          </div>
        </div>
      </div>
    </div>
      
      `

  
}
