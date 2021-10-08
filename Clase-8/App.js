alert('Bievenido al Administrador de Productos de Vittoria Calzados')

class Producto {
    constructor(id,nombre,precio,stock) {
        this.id = id
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.stock = parseInt(stock)
    }
}

class Administrador {
    constructor(nombre) {
        this.nombre = nombre;
    }

     //Funcion para agregar producto al locas storage y crear array de productos
    cargarDeposito() {
        const listadoDeProductos = JSON.parse(localStorage.getItem(`${this.nombre}`));
        
        if(listadoDeProductos != null) {
            this.productos = listadoDeProductos;
        } else {
            this.productos = [];
        }
        // Forma de agilizar el if
        //  this.productos = deposito ? deposito : [];
    }

    //Funcion para agregar el producto, con un if que si encuentra un mismo id, no deja sumar el producto
    agregarProducto(producto) {
        if (this.productos.find(i => i.id == producto.id)) {
            return 'Este producto ya fue agregado';
        } else {
            this.productos.push(producto);
            return 'Producto agregado exitosamente!';
        }
    }
    // Funcion para actualizar el local storage
    actualizarDeposito() {
        localStorage.setItem(`${this.nombre}`, JSON.stringify(this.productos));
    }

    // Funcion para interactuar con el DOM
    mostrarProductos() {
        const section = document.createElement("section");
        section.classList.add('container')
        const nombreAdmin = document.createElement("h1");
        nombreAdmin.classList.add('nombreAdmin')
        nombreAdmin.textContent = `Bienvenido ${this.nombre}`;
        section.appendChild(nombreAdmin);

        this.productos.forEach(producto => {
            section.appendChild(this.armarTarjeta(producto));
        });

        document.body.appendChild(section);
    }
    
    armarTarjeta(producto) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("col-12");
        
        const nombreProducto = document.createElement("h3");
        nombreProducto.textContent = `${producto.nombre}`
        card.appendChild(nombreProducto);

        const id = document.createElement("p");
        id.textContent = `ID: ${producto.id}`;
        id.classList.add('id-producto')
        card.appendChild(id);

        const precio = document.createElement("p");
        precio.textContent = `Precio: $${producto.precio}`;
        precio.classList.add('precio-producto')
        card.appendChild(precio);

        const stock = document.createElement("p");
        stock.textContent = `Stock: ${producto.stock}`
        stock.classList.add('stock-producto')
        card.appendChild(stock);
        
    
        return card;
    }
}

const consultarIngresoDeProdcuto = () => prompt('¿Desea ingresar un producto? Y/N ').toUpperCase() === 'Y';

const cargarProductos = (administrador) => {
    while (consultarIngresoDeProdcuto()) {
        const id = prompt('Ingrese el ID del producto')
        const nombre = prompt('Ingrese el nombre del producto')  
        const precio = parseInt(prompt('Ingrese el precio del producto'))
        const stock = parseInt(prompt('Ingrese el stock del producto'))
        const producto = new Producto(id, nombre, precio, stock);
        alert(administrador.agregarProducto(producto));
    }
}

function iniciarPrograma() {
    const administrador = new Administrador(prompt("Nombre de Administrador"));
    administrador.cargarDeposito();
    cargarProductos(administrador);
    administrador.actualizarDeposito();
    administrador.mostrarProductos();
}

iniciarPrograma();