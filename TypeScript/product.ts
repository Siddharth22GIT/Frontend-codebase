interface Product{
    name: string;
    price: number;
    discount?: number;
}

let products: Product[] = [
    {name: "Laptop", price: 40000},
    {name: "Mouse", price: 1000},
    {name: "Keyboard", price: 3500}
]

let output = " ";
products.forEach(p => {
    output += "Product: "+p.name + 
    "<br> Price: " + p.price + 
    "<br> Discount: " + (p.discount ?? "No Discount <br><br>")
})

document.getElementById('demo')!.innerHTML = output