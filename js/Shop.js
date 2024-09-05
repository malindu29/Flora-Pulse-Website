
const products = document.querySelector(".products");
const cartItems = document.querySelector(".cart-items");
const subtotal = document.querySelector(".subtotal");
const totalItemsInCart = document.querySelector(".items-total");

//javascript of responsive navigation bar
const menuBar = document.querySelector(".menu-bar");
const navBar = document.querySelector(".nav-bar");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    navBar.classList.toggle("active");
})



//Cart Item Data  

const ItemData= [
  {
      id:0,
      name:"Water Bottle",
      price:300,
      desc:"This stylish bamboo bottle is a  sleek alternative to plastic.",
      img:"../images/bamboo.jpeg"
  },{
    id:1,
    name:"Eco Gift Pack",
    price:500,
    desc:"This eco-friendly budget pack satisfies all your hygiene needs",
    img:"../images/eco gift pack.jpg"
  },{
      id:2,
      name:"Zero-Waste bag",
      price:400,
      desc:" These reusable fabric totes help cut back on harmful waste.",
      img:"../images/bags.jpg",

  },{
      id:3,
      name:"Oceanic Earrings",
      price:150,
      desc:"Eco-friendly,blue-color earrings crafted from sustainable seashells.",
      img:"../images/ear.jpg"
  },{
      id:4,
      name:"Skin-Care Pack",
      price:700,
      desc:"Green beauty essentials embedded with sustainable packaging",
      img:"../images/skin care.jpg"
  },{
    id:5,
    name:"Bowls & spoons",
    price:300,
    desc:"Nature friendly kitchen essentials made from Coconut shells",
    img:"../images/spoons.jpg"
  },{
      id:6, 
      name:"Eco-Hoodie Wear",
      price:600,
      desc:"Eco-conscious, pink & free size hoodie- style meets sustainability",
      img:"../images/hoodies.jpg",

  },{
    id:7,
    name:"Home-Deco Item",
    price:390,
    desc:"Hand-crafted made with pure wood, home decoration piece",
    img:"../images/wood.jpg"
  },{
  id:8,
  name:"Trash Bin",
  price:350,
  desc:"Vintage style waste paper trash bin -Environmental-friendly",
  img:"../images/trash.jpg"
  }
];





// Generate the shop
function ShopItemGenerator()  {
  let productsHTML = '';
  ItemData.forEach((item) => {
    productsHTML += `
      <div class="item">
        <div class="item-container">
          <div class="item-img">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <div class="desc">
            <h2>${item.name}</h2>
            <h2>Rs. ${item.price}</h2>
            <p>${item.desc}</p>
            <div class="add-to-cart">
              <button onclick="AddToCart(${item.id})">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  products.innerHTML = productsHTML;
}



// Generate the cart
function CartItemGenerator() {
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const cartHTML = `
      <div class="cart-item">
        <div class="item-info">
          <img src="${item.img}" alt="${item.name}">
          <h4>${item.name}</h4>
        </div>
        <div class="unit-price">
          Rs.${item.price}
        </div>
        <div class="units-remove">
          <div class="units">
            <div class="btn minus" onclick="changeNumberOfUnits('-', ${item.id})">-</div>
            <div class="number">${item.numberOfUnits}</div>
            <div class="btn plus" onclick="changeNumberOfUnits('+', ${item.id})">+</div>           
          </div>
          <div class="remove" onclick="removeItemFromCart(${item.id})">Remove</div>
        </div>
      </div>
    `;
    cartItems.innerHTML += cartHTML;
  });
}



// The cart array saved into the local storage
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// Add to cart
function AddToCart(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("+", id);
  } else {
    const item = ItemData.find((item) => item.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// update cart
function updateCart() {
  CartItemGenerator();
  SubtotalGenerator();

  localStorage.setItem("CART", JSON.stringify(cart));
  
}

//Calculate the Subtotal
function SubtotalGenerator() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotal.innerHTML = `Total Price (${totalItems} items): Rs.${totalPrice.toFixed(2)}`;
  totalItemsInCart.innerHTML = totalItems;
  localStorage.setItem("Total", JSON.stringify(totalPrice));
}


// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "-" && numberOfUnits > 1) {
        numberOfUnits--;
      } else  {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}


// Place order function
function placeOrder() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  // Get the values entered by the user
  const username = nameInput.value;
  const email = emailInput.value;

  if (cart.length === 0) {
    alert("Please add to cart an item before placing your order.");
    return;
  }
  if (!nameInput.value || !emailInput.value) {
    alert("Please enter your name and email before placing your order.");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);

  // Clearing cart
  localStorage.setItem("CART", JSON.stringify([]));

  // Redirect to checkout page
  window.location.href = "checkout.html";

}



ShopItemGenerator();