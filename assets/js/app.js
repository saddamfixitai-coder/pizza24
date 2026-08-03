function renderProducts() {
  const root = document.getElementById('products');
  if (!root) return;
  root.innerHTML = products.map((p, i) =>
    `<div class="card">
       <img src="${p.img}" alt="${p.name}" class="prod-img"/>
       <h3>${p.name}</h3>
       <p class="price">Rs ${p.price}</p>
       <button onclick="addToCart(${i})">Add to Cart</button>
     </div>`
  ).join('');
}

document.addEventListener('DOMContentLoaded', renderProducts);
