export default class Product
{
    constructor(name, category, purchasePrice, finalPrice, count)
    {
        this.id = Math.random();
        this.name = name;
        this.category = category;
        this.purchasePrice = purchasePrice;
        this.finalPrice = finalPrice;
        this.count = count; 
    }
}
