class Zapato {
    constructor(articulo, color, precio, cantidad) {
        this.articulo = articulo.toLowerCase();
        this.color = color.toLowerCase();
        this.precio = precio;
        this.cantidad = cantidad;
    }
    toString() {
        `Zapato articulo: ${this.articulo}\nColor del Zapato: ${this.color}\nPrecio: ${this.precio}\nCantidad de pares ${this.cantidad}`
    }
    precioTotal() {
        let sumaTotal = precio * cantidad
        alert(`El precio final es de ${sumaTotal}`)
    }
}

const articulo = prompt('Ingrese el nombre del articulo que desea comprar')
const color = prompt('Ingrese el color del zapato')
const precio = parseInt(prompt('Ingrese el precio del zapato en vidriera'))
const cantidad = parseInt(prompt('Ingrese la cantidad de pares que desea llevar'))

const zapato1 = new Zapato (articulo, color, precio, cantidad)

console.log(zapato1)
zapato1.precioTotal()



