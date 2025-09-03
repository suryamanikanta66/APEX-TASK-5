/* ====== Data (demo) ====== */
const PRODUCTS = [
  { id: 1,  name: "Smartphone X",        category: "electronics", price: 399, rating: 4.4, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" },
  { id: 2,  name: "Wireless Headphones", category: "electronics", price: 129, rating: 4.6, img: "https://images.unsplash.com/photo-1518441798251-b4c8f94892f2?q=80&w=800&auto=format&fit=crop" },
  { id: 3,  name: "Casual T-Shirt",      category: "fashion",     price: 24,  rating: 4.1, img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop" },
  { id: 4,  name: "Running Shoes",       category: "fashion",     price: 69,  rating: 4.5, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" },
  { id: 5,  name: "Blender Pro 900",     category: "home",        price: 89,  rating: 4.2, img: "https://images.unsplash.com/photo-1542444459-db63c164c390?q=80&w=800&auto=format&fit=crop" },
  { id: 6,  name: "Table Lamp",          category: "home",        price: 39,  rating: 4.0, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop" },
  { id: 7,  name: "Cooking for Beginners",category:"books",       price: 19,  rating: 4.3, img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop" },
  { id: 8,  name: "Laptop Air 14",       category: "electronics", price: 999, rating: 4.7, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop" },
  { id: 9,  name: "Office Chair",        category: "home",        price: 149, rating: 4.4, img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=800&auto=format&fit=crop" },
  { id:10,  name: "Mystery Novel",       category: "books",       price: 14,  rating: 4.1, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop" },
  /* ====== Data (demo) ====== */

  // Electronics
  { id: 1,  name: "Smartphone X",        category: "electronics", price: 399, rating: 4.4, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" },
  { id: 2,  name: "Wireless Headphones", category: "electronics", price: 129, rating: 4.6, img: "https://images.unsplash.com/photo-1518441798251-b4c8f94892f2?q=80&w=800&auto=format&fit=crop" },
  { id: 8,  name: "Laptop Air 14",       category: "electronics", price: 999, rating: 4.7, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop" },
  { id: 11, name: "Smartwatch Pro",      category: "electronics", price: 199, rating: 4.5, img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },

  // Fashion
  { id: 3,  name: "Casual T-Shirt",      category: "fashion",     price: 24,  rating: 4.1, img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop" },
  { id: 4,  name: "Running Shoes",       category: "fashion",     price: 69,  rating: 4.5, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" },
  { id: 12, name: "Leather Jacket",      category: "fashion",     price: 149, rating: 4.6, img: "https://images.unsplash.com/photo-1520974735194-8948c16bb8a2?q=80&w=800&auto=format&fit=crop" },

  // Home
  { id: 5,  name: "Blender Pro 900",     category: "home",        price: 89,  rating: 4.2, img: "https://images.unsplash.com/photo-1542444459-db63c164c390?q=80&w=800&auto=format&fit=crop" },
  { id: 6,  name: "Table Lamp",          category: "home",        price: 39,  rating: 4.0, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop" },
  { id: 9,  name: "Office Chair",        category: "home",        price: 149, rating: 4.4, img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=800&auto=format&fit=crop" },
  { id: 13, name: "Air Purifier",        category: "home",        price: 199, rating: 4.3, img: "https://images.unsplash.com/photo-1606813903994-061f9cc6c2d8?q=80&w=800&auto=format&fit=crop" },

  // Books
  { id: 7,  name: "Cooking for Beginners",category:"books",       price: 19,  rating: 4.3, img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop" },
  { id:10,  name: "Mystery Novel",       category: "books",       price: 14,  rating: 4.1, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop" },
  { id:14,  name: "Science Fiction Book",category: "books",       price: 22,  rating: 4.2, img: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=800&auto=format&fit=crop" },

  // Toys (NEW CATEGORY)
  { id:15, name: "Lego Classic Set",     category: "toys",        price: 59,  rating: 4.8, img: "https://images.unsplash.com/photo-1584951304302-2703b43786fb?q=80&w=800&auto=format&fit=crop" },
  { id:16, name: "Teddy Bear Plush",     category: "toys",        price: 29,  rating: 4.7, img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=800&auto=format&fit=crop" },

  // Sports (NEW CATEGORY)
  { id:17, name: "Football",             category: "sports",      price: 35,  rating: 4.5, img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop" },
  { id:18, name: "Tennis Racket",        category: "sports",      price: 120, rating: 4.4, img: "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=800&auto=format&fit=crop" }


];

/* ====== State ====== */
let state = {
  query: "",
  cats: new Set(["electronics","fashion","home","books","toys","sports"]),
  priceMax: 2000,
  minRating: 0,
  sortBy: "relevance",
  cart: loadCart()
};

/* ====== Elements ====== */
const grid = document.getElementById("grid");
const resultCount = document.getElementById("resultCount");
const priceMax = document.getElementById("priceMax");
const priceMaxOut = document.getElementById("priceMaxOut");
const minRating = document.getElementById("minRating");
const sortBy = document.getElementById("sortBy");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

const cartDrawer = document.getElementById("cartDrawer");
const openCartBtn = document.getElementById("openCart");
const closeCartBtn = document.getElementById("closeCart");
const cartItemsEl = document.getElementById("cartItems");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const cartCountEl = document.getElementById("cartCount");
const clearCartBtn = document.getElementById("clearCart");
const checkoutBtn = document.getElementById("checkout");

const filtersPanel = document.getElementById("filters");
const openFiltersBtn = document.getElementById("openFilters");
const closeFiltersBtn = document.getElementById("closeFilters");
const clearFiltersBtn = document.getElementById("clearFilters");
const backdrop = document.getElementById("backdrop");

/* ====== Helpers ====== */
function money(n){ return `₹${n.toLocaleString("en-IN")}`; }
function persistCart(){ localStorage.setItem("shoplite:cart", JSON.stringify(state.cart)); }
function loadCart(){ return JSON.parse(localStorage.getItem("shoplite:cart")||"{}"); }

/* ====== Rendering ====== */
function renderProducts(){
  // filter
  const filtered = PRODUCTS.filter(p=>{
    const inCat = state.cats.has(p.category);
    const inPrice = p.price <= state.priceMax;
    const inRating = p.rating >= state.minRating;
    const inQuery = p.name.toLowerCase().includes(state.query);
    return inCat && inPrice && inRating && inQuery;
  });

  // sort
  const list = [...filtered];
  switch(state.sortBy){
    case "price-asc":  list.sort((a,b)=>a.price-b.price); break;
    case "price-desc": list.sort((a,b)=>b.price-a.price); break;
    case "rating-desc":list.sort((a,b)=>b.rating-a.rating); break;
    case "name-asc":   list.sort((a,b)=>a.name.localeCompare(b.name)); break;
    default: /* relevance */ break;
  }

  // render
  resultCount.textContent = `Showing ${list.length} item${list.length!==1?'s':''}`;
  grid.innerHTML = list.map(p=>`
    <article class="card" tabindex="0">
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
      <div class="pad">
        <div class="title">${p.name}</div>
        <div class="muted">${p.category} • ⭐ ${p.rating}</div>
        <div class="price">${money(p.price)}</div>
        <div class="actions">
          <button class="btn" data-id="${p.id}" data-act="dec">−</button>
          <button class="btn primary" data-id="${p.id}" data-act="add">Add to cart</button>
          <button class="btn" data-id="${p.id}" data-act="inc">＋</button>
        </div>
      </div>
    </article>
  `).join("");

  // delegate click handlers on grid
  grid.onclick = (e)=>{
    const btn = e.target.closest("button[data-id]");
    if(!btn) return;
    const id = +btn.dataset.id;
    if(btn.dataset.act==="add" || btn.dataset.act==="inc") addToCart(id, 1);
    if(btn.dataset.act==="dec") addToCart(id, -1);
  };
}

function renderCart(){
  const entries = Object.entries(state.cart); // [id, qty]
  if(entries.length===0){
    cartItemsEl.innerHTML = `<p class="muted">Your cart is empty.</p>`;
    cartSubtotalEl.textContent = money(0);
    cartCountEl.textContent = 0;
    return;
  }
  let subtotal = 0;
  cartItemsEl.innerHTML = entries.map(([id,qty])=>{
    const p = PRODUCTS.find(x=>x.id===+id);
    const total = p.price*qty; subtotal += total;
    return `
      <div class="item">
        <img src="${p.img}" alt="${p.name}"/>
        <div>
          <div class="title">${p.name}</div>
          <div class="muted">${money(p.price)} • ⭐ ${p.rating}</div>
        </div>
        <div class="qty">
          <button data-id="${id}" data-act="dec">−</button>
          <strong>${qty}</strong>
          <button data-id="${id}" data-act="inc">＋</button>
          <button data-id="${id}" data-act="remove" title="Remove">🗑️</button>
        </div>
      </div>`;
  }).join("");
  cartSubtotalEl.textContent = money(subtotal);
  cartCountEl.textContent = entries.reduce((n,[,q])=>n+q,0);

  cartItemsEl.onclick = (e)=>{
    const b = e.target.closest("button[data-id]");
    if(!b) return;
    const id = +b.dataset.id;
    if(b.dataset.act==="inc") addToCart(id, 1);
    if(b.dataset.act==="dec") addToCart(id, -1);
    if(b.dataset.act==="remove") removeFromCart(id);
  };
}

/* ====== Cart ops ====== */
function addToCart(id, delta=1){
  const cur = state.cart[id] || 0;
  const next = Math.max(0, cur + delta);
  if(next===0) delete state.cart[id]; else state.cart[id]=next;
  persistCart();
  renderCart();
}
function removeFromCart(id){
  delete state.cart[id];
  persistCart();
  renderCart();
}

/* ====== Event wiring ====== */
// search
searchForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  state.query = searchInput.value.trim().toLowerCase();
  renderProducts();
});

// price
priceMax.addEventListener("input", ()=>{
  state.priceMax = +priceMax.value;
  priceMaxOut.textContent = `₹${state.priceMax}`;
  renderProducts();
});

// rating
minRating.addEventListener("change", ()=>{
  state.minRating = +minRating.value;
  renderProducts();
});

// sort
sortBy.addEventListener("change", ()=>{
  state.sortBy = sortBy.value;
  renderProducts();
});

// categories (delegate)
document.querySelectorAll('input[name="cat"]').forEach(cb=>{
  cb.addEventListener("change", ()=>{
    if(cb.checked) state.cats.add(cb.value); else state.cats.delete(cb.value);
    renderProducts();
  });
});

// clear filters
clearFiltersBtn.addEventListener("click", ()=>{
  // reset all
  state.cats = new Set(["electronics","fashion","home","books"]);
  document.querySelectorAll('input[name="cat"]').forEach(cb=>cb.checked=true);
  state.priceMax = 2000; priceMax.value = 2000; priceMaxOut.textContent = "₹2000";
  state.minRating = 0;   minRating.value = "0";
  state.query = "";      searchInput.value = "";
  state.sortBy = "relevance"; sortBy.value = "relevance";
  renderProducts();
});

/* Drawer open/close (cart) */
function openCart(){ cartDrawer.classList.add("open"); cartDrawer.setAttribute("aria-hidden","false"); backdrop.hidden=false; }
function closeCart(){ cartDrawer.classList.remove("open"); cartDrawer.setAttribute("aria-hidden","true"); backdrop.hidden=true; }
openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);

/* Filters panel on mobile */
openFiltersBtn?.addEventListener("click", ()=>{
  const open = filtersPanel.classList.toggle("open");
  openFiltersBtn.setAttribute("aria-expanded", String(open));
  backdrop.hidden = !open;
});
closeFiltersBtn?.addEventListener("click", ()=>{
  filtersPanel.classList.remove("open"); backdrop.hidden=true;
});
backdrop.addEventListener("click", ()=>{
  closeCart();
  filtersPanel.classList.remove("open");
  backdrop.hidden=true;
});

/* Cart footer actions */
clearCartBtn.addEventListener("click", ()=>{ state.cart={}; persistCart(); renderCart(); });
checkoutBtn.addEventListener("click", ()=> alert("Demo checkout – integrate payments here!") );

/* ====== Init ====== */
function init(){
  priceMaxOut.textContent = `₹${state.priceMax}`;
  renderProducts();
  renderCart();
}
init();
// Toggle Mobile Menu
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
