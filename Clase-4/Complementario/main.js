alert('Bienvenido a la tienda online de Vittoria Calzados')

const modelos = `Elija un modelo
1.-Zapatilla Deportiva
2.-Zapato de vestir
3.-Zapato de Dama
4.-Salir`

const selectQuantity = 'Indicanos la cantidad de pares que quieres llevar'

let deportivaStock = 50
let vestirStock = 40
let damaStock = 75

let salir = ''

let cart = 0

const deportivaPrice = 3000
const vestirPrice = 4000
const damaPrice = 3500

const isStock = (quantity, stock) => {
    if (quantity > stock) {
        alert(`No tenemos suficiente stock. El stock disponible es de ${stock}`)
        false
    } else return true
}

const addToCart = (options, quantity) => {
        switch (options) {
        case 1:
            if(isStock(quantity, deportivaStock)) {
                let value = quantity * deportivaPrice
                cart += (quantity * deportivaPrice)
                deportivaStock -= quantity
                alert(`${selectQuantity} pares de Zapatillas Deportivas agregados al carrito con el valor de ${value}`)
            }
            break
        case 2:
            if (isStock(quantity, vestirStock)) {
                let value = quantity * vestirPrice
                cart += (quantity * vestirPrice)
                damaStock -= quantity
                alert(`${selectQuantity} pares de Zapatos de Vestir agregados al carrito con el valor de ${value}`)
            }
            break
        case 3:
            if (isStock(quantity, damaStock)) {
                let value = quantity * damaPrice
                cart += (quantity * damaPrice)
                damaStock -= quantity
                alert(`${selectQuantity} pares de Zapatos de Dama agregados al carrito con el valor de ${value}`)
            }
            break
        default:
            alert('Opcion no valida')
    }
    return true
}


do {
    let options = parseInt(prompt(modelos))
    if (options === 4) break
    let qty = parseInt(prompt(selectQuantity))
    
    addToCart(options, qty)
    salir = prompt('¿Desea seguir comprando? S/N')

} while (salir == 'S') 


const cartPrice = (parameter) => {
    if (parameter > 0) {
        alert(`Su compra tiene un total de $${parameter}`)
        alert('Si le interesa seguir comprando, no dude en contactarnos!')
    } else if (parameter == 0) {
        prompt('Nos gustaria saber porque no pudo realizar una compra. Estamos a su servicio')
    }
}

cartPrice(cart)





alert('Gracias por su visita')