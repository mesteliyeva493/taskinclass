class Human {
    constructor(Name,
        Surname,
        Age=0,
        gender,
        nationality,
    ) {
        this.Name = Name
        this.Surname = Surname
        this.Age = Age
        this.gender = gender
        this.nationality = nationality


    }
    //   getFullName( 
    //     return`${"this.Name"} ${"this.Surname"}`
    //   )

}
class User extends Human {
    constructor(
        Name,
        Surname,
        Age,
        gender,
        nationality,
        Username,
        Email,
        isAdmin,
        isLogged,
        password,
        bio)
        { 
            super( Name,
            Surname,
            Age,
            gender,
            nationality)
            this.Username=Username
            this.Email=Email
            this.isAdmin=isAdmin
            this. isLogged=isLogged
            this.isLogged=false
            this.bio=bio
            this.password=password
        }

}
let User1=new User("Zehra","mesteliyeva",21,"female","Azerbaijan","zehra","mesteliyeva4@gmail.com",)
let User2=new User("Zehra","mesteliyeva",22,"female","Azerbaijan","zehra","mesteliyeva4@gmail.com",)
let User3=new User("Zehra","mesteliyeva",23,"female","Azerbaijan","zehra","mesteliyeva4@gmail.com",)

console.log(User1)
const Users =[User1,User1,User3];
console.log(Users)

