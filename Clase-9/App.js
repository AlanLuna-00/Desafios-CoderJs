const productsContainer = document.getElementById('productsContainer');
const buttonOne = document.getElementById('buttonBuy1');
const buttonTwo = document.getElementById('buttonBuy2');
const buttonThree = document.getElementById('buttonBuy3');
const buttonFour = document.getElementById('buttonBuy4');
const buttonFive = document.getElementById('buttonBuy5');
const buttonSix = document.getElementById('buttonBuy6');


// const htmlCard = (product) => {
//     return 

const renderHtmlCard = (products, container) => {
    container.innerHTML = ''
    let contador = 1 
    for (const product of products) {
        const productInHtml = `<div class="card col-4 mt-5 text-center p-2">
        <div class="card-body">
            <p class="card-text card-id" id="id-product">ID: ${product.id}</p>
            <p class="card-title">${product.name}</p>
            <p class="card-text card-price">$${product.price}</p>
            <p class="card-text card-stock">Stock Disponible: ${product.stock}</p>
            <input type="submit" class="btn btn-outline-dark mx-auto" id="buttonBuy${contador++}" value="Comprar">
        </div>
    </div>`
        container.innerHTML += productInHtml;
    }


    }


renderHtmlCard(products, productsContainer)

class Cart {
    addToCart() {
       const cartContainer = document.getElementById('cartContainer') 
    }
}

