class User {
    constructor(id, username, password, createdAt, email, profileImg, balance, role = 'client', basketItems = []) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.createdAt = createdAt;
        this.email = email;
        this.profileImg = profileImg;
        this.balance = balance;
        this.role = role;
        this.basketItems = basketItems;
    }
}
export default User