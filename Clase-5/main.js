class zapato {
    constructor(articulo, color, precio, cantidad) {
        this.articulo = articulo;
        this.color = color;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    toString() {
        `Zapato articulo: ${this.articulo}\nColor del Zapato: ${this.color}\nPrecio: ${this.precio}\nCantidad de pares ${this.cantidad}`
    }
}

const articulo = prompt('Ingrese el nombre del articulo que desea comprar')
const color = prompt('Ingrese el color del zapato')
const precio = Number(prompt('Ingrese el precio del zapato en vidriera'))
const cantidad = Number(prompt('Ingrese la cantidad de pares que desea llevar'))

const zapato1 = new zapato (articulo, color, precio, cantidad)

console.log(zapato1)

// const precioFinal = (a, b) => {a * b}
let precioTotal = (cantidad * precio)

alert(`El precio final es de ${precioTotal}`)
