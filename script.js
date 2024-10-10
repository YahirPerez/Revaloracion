// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Función para actualizar el carrito
    const updateCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = ''; // Limpiar el contenedor
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = total.toFixed(2);
    };

    // Agregar al carrito desde la vista de productos
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            const quantity = parseInt(document.getElementById(`quantity-${button.dataset.index}`).value) || 1;

            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.name === name);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ name, price, quantity });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        });
    });

    updateCart(); // Llamar a la función para mostrar el carrito al cargar la página
});



document.querySelectorAll('.article').forEach(article => {
    article.addEventListener('click', function() {
        alert(`Has seleccionado el ${this.querySelector('h3').textContent}`);
    });
});




localStorage.setItem('cart', JSON.stringify(cart));

