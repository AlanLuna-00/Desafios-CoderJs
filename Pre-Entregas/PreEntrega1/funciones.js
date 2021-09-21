const enStock = (quantity,stock) =>{
    if(quantity > stock){
        alert(`No tenemos suficiente stock, el stock disponible es ${stock}`);
        return false;
    }
    else return true;
}


const agregarAlCarrito = (option, quantity) => {
    const encontrado = zapatos.find(product=>product.id === option) 
    if(enStock(quantity, encontrado.stock)){
        let valor = (quantity * encontrado.price)
        carrito += (quantity * encontrado.price);
        zapatos[option-1].stock -= quantity;
        alert(`Se agrego ${quantity} pares de ${encontrado.name} con un valor de ${valor}`);
    }
}


const mostrarMenu = () =>{
    let menu = "Escoge un Producto: \n";
    zapatos.forEach((product)=>{
        menu += product.id + ".-" + product.name + "\n";
    });
    menu += (zapatos.length + 1) + ".-Salir" ;
    return parseInt(prompt(menu));
    
};


