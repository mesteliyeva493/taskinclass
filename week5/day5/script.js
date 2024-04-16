let body=document.body
let div = document.createElement('div');
div.innerHTML="HELLO"
div.classList.add("card","text-center")
body.appendChild(div)
console.log("salam")

let Headerdiv=document.createElement('div')
Headerdiv.className = "card-header"
div.appendChild(Headerdiv)

let navUl= document.createElement("ul");
navUl.classList.add("nav","nav-pills", "card-header-pills")
Headerdiv.appendChild(navUl)


let li= document.createElement('li');
li.className="nav-item"
navUl.appendChild(li)

let link=document.createElement('a')
link.classList.add("nav-link","disabled")
link.setAttribute("href","#")
link.textContent="Active"
li.appendChild(link)


let li2= document.createElement('li');
li2.className="nav-item"
navUl.appendChild(li2)


let link2=document.createElement('a')
link2.classList.add("nav-link","disabled")
link2.setAttribute("aria-disabled","true")
link2.textContent="Link"
li2.appendChild(link2)


let divBody=document.createElement('div')
divBody.className = "card-body"
div.appendChild(divBody)

let h5=document.createElement('h5')
h5.className="card-title"
h5.textContent="Special title treatment"
divBody.appendChild(h5)

let p=document.createElement('p')
p.className="card-text"
p.textContent="With supporting text below as a natural lead-in to additional content"
divBody.appendChild(p)

let link3=document.createElement('a')
link3.classList.add("nav-link","disabled")
link3.setAttribute("href","#", "class","btn btn-primary")
link3.textContent="Active"
divBody.appendChild(link3)



