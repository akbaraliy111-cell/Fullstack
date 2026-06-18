class Product {
    static products = [];
    constructor (name, price){
        this.name = name;
        this.price = price;
        Product.products.push([name, price]);
    };
    static getAllProducts(){
        return Product.products;
    };
}

new Product('pepsi', 15000);
new Product('non', 5000);
console.log(Product.getAllProducts());