let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(index) {
  const p = products[index];
  cart.push(p);
  saveCart();
  renderCart();
  alert(p.name + ' added to cart');
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!container || !totalEl) return;

  container.innerHTML = cart.length
    ? cart.map((c, i) => `<div class="cart-row"><span>${c.name}</span> <span>Rs ${c.price}</span></div>`).join('')
    : '<div class="empty">Cart is empty</div>';

  const total = cart.reduce((s, item) => s + item.price, 0);
  totalEl.innerHTML = `<strong>Total: Rs ${total}</strong>`;
}

// wire clear button
document.addEventListener('DOMContentLoaded', () => {
  const clearBtn = document.getElementById('clear-cart');
  if (clearBtn) clearBtn.addEventListener('click', clearCart);
  renderCart();
});
