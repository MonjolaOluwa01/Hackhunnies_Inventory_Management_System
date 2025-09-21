// Inventory Management System
 
// Create an empty array called Inventory
 
let inventory = []
function addProduct(id, name, price, quantity) {
  let existingProduct = inventory.find(product => product.id === id);
 
if(existingProduct){
  existingProduct.quantity += quantity;
  console.log("update product stock")
}else{
  let product = {
    id:id,
    name:name,
    price:price,
    quantity: quantity,
  }
  inventory.push(product);
};
 
 
console.log(inventory)
}

// Add products
addProduct(1, "Biscuit", 20, 6);
addProduct(2, "Bread", 40, 8);
addProduct(3, "Candy", 60, 10);
addProduct(4, "Pampers", 500, 12);
addProduct(5, "Butter", 200, 10);
addProduct(6, "Milk", 30, 18);
addProduct(7, "Sugar", 5, 15);
addProduct(8, "Toys", 10, 30);
addProduct(9, "Chocolate", 50, 10);
addProduct(10, "Juice", 300, 15);
addProduct(11, "Toys", 100, 2);
addProduct(12, "Perfume", 500, 10)
addProduct(13, "Tissue Paper", 300, 11);
addProduct(14, "Noodles", 250, 2);
addProduct(15, "Detergent", 200, 15);
