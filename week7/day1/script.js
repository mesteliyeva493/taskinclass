const button1=document.getElementById("btn1")
const button2=document.getElementById("btn2")
const p=document.getElementById("p")
const button3=document.getElementById("btn3")
let counter=localStorage.getItem("mycounter")||0
p.textContent=counter
counter=0
button1.addEventListener("click",()=>{
   counter--
   p.textContent = counter;
   localStorage.setItem("mycounter",counter)
});
button2.addEventListener("click",()=>{
    counter++
    p.textContent = counter;
    localStorage.setItem("mycounter",counter)
});
button3.addEventListener("click", () => {
    counter = 0;
    p.textContent = counter;
    localStorage.setItem("mycounter",counter)
});

