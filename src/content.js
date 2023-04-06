const CONTENT = {
    Categories: [
      { name: "electronics", displayName: "Electronics", _id: 1, description: "Amazing Electronics" },
      { name: "food", displayName: "Food", _id: 2, description: "Amazing Food" },
      { name: "clothing", displayName: "Clothing", _id: 3, description: "Amazing Clothing" },
    ],
    Products: [
      { name: "TV", category: "electronics", price: 699.0, inStock: 5 },
      { name: "Radio", category: "electronics", price: 99.0, inStock: 15 },
      { name: "Shirt", category: "clothing", price: 9.0, inStock: 25 },
      { name: "Socks", category: "clothing", price: 12.0, inStock: 10 },
      { name: "Apples", category: "food", price: 0.99, inStock: 500 },
      { name: "Eggs", category: "food", price: 1.99, inStock: 12 },
      { name: "Bread", category: "food", price: 2.39, inStock: 90 },
    ],
};
  
export default CONTENT;
  