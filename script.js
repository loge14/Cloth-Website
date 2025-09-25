let cart = [];

// Add item to cart
function addToCart(item, price) {
  let existing = cart.find(i => i.item === item);
  if(existing) {
    existing.qty += 1;
  } else {
    cart.push({ item, price, qty: 1 });
  }
  updateCartUI();
}

// Update cart panel
function updateCartUI() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(i => {
    total += i.price * i.qty;
    const li = document.createElement("li");
    li.textContent = `${i.item} x${i.qty} - ₹${i.price * i.qty}`;
    cartItems.appendChild(li);
  });
  cartCount.innerText = cart.reduce((a,b) => a + b.qty, 0);
  cartTotal.innerText = total;
}

// Cart panel toggle
const cartPanel = document.getElementById("cart-panel");
document.getElementById("cart-toggle").addEventListener("click", () => {
  cartPanel.style.right = "0";
});
document.getElementById("close-cart").addEventListener("click", () => {
  cartPanel.style.right = "-350px";
});

// Checkout (demo)
function checkout() {
  if(cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert(`✅ Checkout successful! Total: ₹${cart.reduce((a,b)=>a+b.price*b.qty,0)}`);
  cart = [];
  updateCartUI();
}

// Login functionality (demo)
function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(email === "user@example.com" && password === "12345") {
    document.getElementById("login-message").innerText = "✅ Login successful!";
    document.getElementById("login-message").style.color = "green";
  } else {
    document.getElementById("login-message").innerText = "❌ Invalid email or password!";
    document.getElementById("login-message").style.color = "red";
  }
}
