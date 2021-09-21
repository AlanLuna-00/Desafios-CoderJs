alert('Bienvenido a la tienda online de Vittoria Calzados')

do{

    let modelos = mostrarMenu();
    if(modelos === zapatos.length + 1) break;
    let qty = parseInt(prompt(selectQuantity))

    agregarAlCarrito(modelos, qty);

    salir = prompt('¿Desea agregar mas productos a la cuenta? S/N');

}while(salir.toUpperCase() === 'S');

if(carrito > 0){
    alert(`Su compra tiene un total de $${carrito}`);
} else if (carrito === 0) {
    alert('Si tuvo algun problema y no pudo realizar una compra.\nNo dude en contactarnos en nuestras redes sociales.')
}

alert('Gracias, vuelva pronto')