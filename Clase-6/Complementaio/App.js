let productos = [
    {id: 1, name: "Zapatilla Deportiva", price: 3500, stock: 120},
    {id: 2, name: "Zapato de Vestir", price: 4000, stock: 40},
    {id: 3, name: "Zapato de Dama", price: 4250, stock: 75},
    {id: 4, name: "Bota de Lluvia", price: 2200, stock: 95},
    {id: 5, name: "Sandalias", price: 1050, stock: 150},
];

let acomodarPrecio = productos.sort((a, b) => {
    if (a.price == b.price) {
        return 0
    }
    if (a.price < b.price) {
        return -1
    }
    if (a.price > b.price) {
        return 1;
    }
})




let acomodarStock = productos.sort((a, b) => {
    if (a.stock == b.stock) {
        return 0
    }
    if (a.stock < b.stock) {
        return -1
    }
    if (a.stock > b.stock) {
        return 1;
    }
})


console.log(acomodarPrecio);
console.log(acomodarStock);



