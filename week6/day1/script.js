const toForm=document.querySelector("#form")
const toInput=document.querySelector("#input")
const addBtn=document.querySelector("#button")
const Error=document.querySelector("#error")
const Table=document.querySelector(".table")
const trTable=document.querySelector(".tr")

class todoList {
    constructor() {
        
        this.toInput = document.querySelector("#input").value;

        this.tasks = [];

        this.addBtn.addEventListener('click', () => {
            const newTo = this.toInput.value.trim();
            if (newTo !== '') {
                this.tasks.push(newTo);
                this.updateTasklist();
                this.toInput.value = '';
                this.error.style.display = 'none';
            } else {
                this.error.style.display = 'block';
            }
        });

        this.toForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addBtn.click();
        });
    }

    updateTasklist() {
        this.table.innerHTML = '';

        this.tasks.forEach((task, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${task}</td>
                <td>${task}</td>
                <td>${task}</td>
            `;
            this.table.appendChild(tr);
        });
    }


}

const myTodoList = new todoList();
console.log(myTodoList)



