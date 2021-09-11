alert('Bienvenido a la tienda online de Vittoria Calzados')

const modelos = `Elija un modelo
1.-Zapatilla Deportiva
2.-Zapato de vestir
3.-Zapato de Dama
4.-Salir`

let salir = ''

let cart = 0

const deportivaPrice = 3000
const vestirPrice = 4000
const damaPrice = 3500

const addToCart = (options) => {
        switch (options) {
        case 1:
            alert(`Zapatilla Deportiva agregada al carrito con el valor de ${deportivaPrice}`)
            cart += deportivaPrice
            break
        case 2:
            alert(`Zapato de vestir agregado al carrito con el valor de ${vestirPrice}`)
            cart += vestirPrice
            break
        case 3:
            alert(`Zapato de Dama agregado al carrito con el valor de ${damaPrice}`)
            cart += damaPrice
            break
        default:
            alert('Opcion no valida')
    }
    return 
}


do {
    let options = parseInt(prompt(modelos))
    if (options === 4) break
    
    addToCart(options)
    salir = prompt('¿Desea seguir comprando? S/N')

} while (salir == 'S') 


if (cart > 0) {
    alert(`Su compra tiene un total de $${cart}`)
}

alert('Gracias por su visita')