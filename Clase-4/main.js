

let totalAPagar = parseFloat(prompt('Ingrese el precio de su producto'))

let precioEnvio = 150


const suma = (a, b) => a + b
const iva = (x) => x * 0.21


let precioIva = iva(totalAPagar)

alert('El precio total del iva es de: ' + precioIva)
alert('El precio de envio a su ubicacion es de: ' + precioEnvio)



let precioFinal = suma(precioEnvio, suma(totalAPagar, iva(totalAPagar)))

const mostrar = (mensaje) => console.log(mensaje)

alert('El precio final es de: ' + precioFinal)
