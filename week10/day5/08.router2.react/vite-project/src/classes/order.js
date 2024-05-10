class Order{
    constructor(userId, totalPrice, createdAt, items) {
        this.userId = userId;
        this.totalPrice = totalPrice;
        this.createdAt = createdAt;
        this.items = items;
      }
    }

export default Order