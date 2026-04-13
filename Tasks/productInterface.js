"use strict";
let product1 = {
    name: "Sarso tel",
    price: 120,
    category: "oil",
    color: "golden"
};
let product2 = {
    name: "Chatai",
    price: 250,
    category: "mat",
    color: "user-preffered"
};
document.getElementById('output').innerHTML =
    "Product 1: <br>Name: " + product1.name + "<br>Price: " + product1.price + "<br>Category: " + product1.category + "<br>Color: " + product1.color + "<br><br><br> Product 2: <br>Name: " + product2.name + "<br>Price: " + product2.price + "<br>Category: " + product2.category + "<br>Color: " + product2.color;
