let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");
    
    cartItems.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.product} - ₹${item.price}`;
        cartItems.appendChild(li);
    });

    totalPrice.textContent = total;
}

