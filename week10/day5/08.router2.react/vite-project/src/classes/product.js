class Product {
    constructor(id, name, salePrice, costPrice, createdAt, imgSrc, discountPercentage, description, categoryId, stockCount) {
      this.id = id;
      this.name = name;
      this.salePrice = salePrice;
      this.costPrice = costPrice;
      this.createdAt = createdAt;
      this.imgSrc = imgSrc;
      this.discountPercentage =discountPercentage;
      this.description = description;
      this.categoryId = categoryId;
      this.stockCount = stockCount;
    }
  }
   export default Product