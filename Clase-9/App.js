const renderHtmlCard = (products, container) => {
    container.innerHTML = "";
    for (const product of products) {
        const card = document.createElement("div");
        card.classList.add("card", "col-4", "mt-5", "text-center", "p-2");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", 'item');
        const productInHtml = `
            <p class="card-text card-id" id="id-product">ID: ${product.id}</p>
            <p class="card-title">${product.name}</p>
            <p class="card-text card-price">$${product.price}</p>
            <p class="card-text card-stock">Stock Disponible: ${product.stock}</p>
       `;
        cardBody.innerHTML = productInHtml;
        const buttonBuy = document.createElement("input");
        buttonBuy.setAttribute("type", "submit");
        buttonBuy.setAttribute("value", 'Comprar')
        buttonBuy.classList.add("btn", "btn-outline-dark", "mx-auto", "addToCart");
        cardBody.appendChild(buttonBuy);
        card.appendChild(cardBody);
        container.appendChild(card);
        }

        const addToCartButton = document.querySelectorAll('.addToCart')
        addToCartButton.forEach((e) => {
            e.addEventListener("click", addToCartClick)
        })
        function addToCartClick(event) {
            const button = event.target;
            const item = button.closest('.item')

            const itemTitle = item.querySelector('.card-title').textContent;
            const itemPrice = item.querySelector('.card-price').textContent;

            addItemToCart(itemTitle, itemPrice)
        }
        const addItemToCart = (itemTitle, itemPrice) => {
            console.log(itemTitle, itemPrice);
            const cartRow = document.createElement('div')
            const cartContentContainer = `
            <div class="row cartContent" id="cartContent">
                  <div class="col-5  ">
                      <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                          <h6 class="shopping-cart-item-title cartContentTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
                      </div>
                  </div>
                  <div class="col-3">
                      <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                          <p class="item-price mb-0 cartContentPrice">${itemPrice}</p>
                      </div>
                  </div>
                  <div class="col-4">
                  <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                          <input class="shopping-cart-quantity-input cartContentQuantity" type="number"value="1">
                          <button class="btn btn-danger buttonDelete" type="button">X</button>
                      </div>
                  </div>
              </div>`;
            cartRow.innerHTML = cartContentContainer;
            cartContainer.append(cartRow);

            cartRow.querySelector('.buttonDelete').addEventListener('click', removeCartItem)

            updateCartTotalPrice();
            }
            const updateCartTotalPrice = () => {
                let total = 0
                const cartTotal = document.querySelector('#cartTotal');

                const cartContent = document.querySelectorAll('#cartContent')

                cartContent.forEach(cartContent => {
                    const cartContentPriceElement = cartContent.querySelector('.cartContentPrice')
                    const cartItemPrice = Number(cartContentPriceElement.textContent.replace('$', ''));
                    const cartItemQuantityElement = cartContent.querySelector('.cartContentQuantity')
                    const cartItemQuantity = Number(cartItemQuantityElement.value)
                    
                    total = total + cartItemPrice * cartItemQuantity
                })
                cartTotal.innerHTML= `$${total}`
                console.log(total);
            }
            function removeCartItem(event) {
                const buttonClicked = event.target;
                buttonClicked.closest('#cartContent').remove();
                updateCartTotalPrice()
            }
};
    

    


renderHtmlCard(models, productsContainer)



