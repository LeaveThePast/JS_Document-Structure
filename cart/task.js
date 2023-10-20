const controlsElements = document.getElementsByClassName(
    "product__quantity-control"
);

Array.from(controlsElements).forEach((element) => {
    element.addEventListener("click", (event) => {
        const currentElement = event.target;
        const quantityValueElement = currentElement
            .closest(".product__quantity-controls")
            .querySelector(".product__quantity-value");
        let quantity = parseInt(quantityValueElement.textContent);

        if (
            currentElement.classList.contains("product__quantity-control_dec")
        ) {
            if (quantity > 1) {
                quantity--;
            }
        } else if (
            currentElement.classList.contains("product__quantity-control_inc")
        ) {
            quantity++;
        }

        quantityValueElement.textContent = quantity;
    });
});

const productAddElements = document.getElementsByClassName("product__add");

Array.from(productAddElements).forEach((element) => {
    element.addEventListener("click", (event) => {
        const currentElement = event.target.closest(".product");
        const shopCartElement = document.querySelector(".cart__products");

        const productId = currentElement.getAttribute("data-id");

        const existingProduct = shopCartElement.querySelector(`[data-id="${productId}"]`);

        if (existingProduct) {
            const existingProductQuantity = existingProduct.querySelector(".cart__product-count");
            existingProductQuantity.textContent = parseInt(existingProductQuantity.textContent) + parseInt(currentElement.querySelector(".product__quantity-value").textContent);
        } else {
            const productTitle = currentElement.querySelector(".product__title").textContent;
            const productQuantity = currentElement.querySelector(".product__quantity-value").textContent;
            const productImage = currentElement.querySelector(".product__image").getAttribute("src");

            const selectedProduct = document.createElement("div");
            selectedProduct.classList.add("cart__product");
            selectedProduct.setAttribute("data-id", productId);
            selectedProduct.innerHTML = `
                <img src="${productImage}" alt="" class="cart__product-image" />
                <div class="cart__product-info">
                    <div class="cart__product-title">${productTitle}</div>
                    <div class="cart__product-count">${productQuantity}</div>
                </div>
            `;

            shopCartElement.appendChild(selectedProduct);
        }
    });
});
