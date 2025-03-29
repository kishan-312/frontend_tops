// Theme


function initialThemeSet() {

    const savedTheme = localStorage.getItem("theme") ;
    console.log(savedTheme);
    
    const systemIsDark = window.matchMedia("(prefers-color-scheme:dark)").matches ;
    console.log(systemIsDark);
    const initialTheme = savedTheme ?? (systemIsDark ? "dark" : "light" );
    document.documentElement.setAttribute("data-theme",initialTheme);

    document.addEventListener("DOMContentLoaded" , () => {

        const $themeBtn = document.querySelector("[data-theme-btn]");
        $themeBtn.addEventListener("click", toggleTheme )        

    } )

}

initialThemeSet()

function toggleTheme() {

    const currentTheme = document.documentElement.getAttribute("data-theme") || "light" ;
    console.log(currentTheme);
    const newtheme = currentTheme === "light" ? "dark" : "light" ;
    document.documentElement.setAttribute("data-theme",newtheme);
    localStorage.setItem("theme",newtheme);

}

//cart

function cartDropdwonToggle() {

    const $cart = document.querySelector("[data-cart]");
    const $cartDropDown = document.querySelector("[data-cart-dropdown]");
    const $cartDataCount = document.querySelector("[data-cart-count]") ;
    const $cartButtons = document.querySelectorAll("[data-cart-btn]");

    const cartItems = JSON.parse(localStorage.getItem("cart")) || {} ;
    console.log(cartItems);
    
    const Max_Total_Items = 70 ;
    const Max_Per_Items = 10 ;

    updateCart() ;
    
    $cart.addEventListener("click" , (e)  => {

        e.stopPropagation() ;
        $cartDropDown.classList.toggle("toggle-cart") ;

    } )

    window.addEventListener("click" , (e) => {

        if(!$cart.contains(e.target) && !$cartDropDown.contains(e.target) ) {

            $cartDropDown.classList.remove("toggle-cart");

        }

    } )

  $cartButtons.forEach((button) => {

    button.addEventListener("click" , () => {

        const card = button.closest(".card");
        const itemName = card.querySelector("h3").textContent ;
        const itemPrice = parseFloat(card.querySelector("[data-cart-prize]").textContent.replace(/[^\d.]/g, ""));
        const itemImage = card.querySelector("img").src ;

        const totalCartQuantity = Object.values(cartItems).reduce((sum,item) => sum + item.quantity ,0 );
        console.log(totalCartQuantity);
        

        if(totalCartQuantity >= Max_Total_Items ) {

            alert(`you can't add more than ${Max_Total_Items} total items to the cart `);
            return ;

        }

        if(cartItems[itemName]) {

            if(cartItems[itemName].quantity >= Max_Per_Items ) {

                alert(`you can't add more than ${Max_Per_Items} to items to the cart `);
                return ;

            }
            cartItems[itemName].quantity += 1 ;

        }

        else {

            cartItems[itemName] = { price : itemPrice , quantity : 1 , image : itemImage }

        }

        console.log(cartItems);

        saveCart();
        updateCart();

    } );

    
  } );

  function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cartItems));

  }


  function updateCart() {

    let cartList = `<h2>Your Cart</h2>`;

    if(Object.keys(cartItems).length === 0) {

        cartList += `<p>Cart is empty</p>` ;

    }

    else {

        let totalBill = 0;

        cartList += `<ul style="max-height:300px; overflow-y : auto;display:flex;flex-direction:column;gap:10px;margin-top:10px" >`;
        Object.keys(cartItems).forEach((itemName) => {

            const item = cartItems[itemName] ;
            const itemTotalPrice = parseFloat(item.price) * item.quantity ;
            totalBill += itemTotalPrice ;
            cartList += `
            
                <li style="display:flex; align-items:center; gap:10px" >
                    <img src="${item.image}" alt="${itemName}" style="width: 50px; height: 50px; object-fit: cover" >
                    <span style="font-size:16px" >${itemName} - ${item.price}</span>
                    <button class="cart-btn" data-action="decrease" data-item="${itemName}"><i class="fa fa-solid fa-minus"></i></button>
                    <span style="font-size:16px">${item.quantity}</span>
                    <button class="cart-btn" data-action="increase" data-item="${itemName}"><i class="fa fa-solid fa-plus"></i></button>
                    <button class="cart-btn remove-btn" data-action="remove" data-item="${itemName}"><i class="fa fa-solid fa-trash"></i></button>
                    <span style="font-size:16px; font-weight:bold;">Total: ₹${itemTotalPrice.toFixed()}</span>
                <li>

            `;

        } );
        cartList += `</ul>`;

        cartList += `<h3 style="margin-top:10px; font-size:18px;">Total Bill: ₹${totalBill.toFixed(2)}</h3>`;

    }

    $cartDropDown.innerHTML = cartList ;
    

     // Update cart count
     const totalCount = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
     $cartDataCount.textContent = totalCount; // ✅ Updates cart count on refresh

     // Add event listeners for cart buttons
     document.querySelectorAll(".cart-btn").forEach(button => {
         button.addEventListener("click", handleCartAction);
     });

  }

  function handleCartAction(e) {

    e.stopPropagation();

    let target = e.target;
    if(target.tagName === "I") {

        target = target.closest("button");

    }
    const action = target.dataset.action;
    const itemName = target.dataset.item;

    
    if (!cartItems[itemName]) return; // Prevent errors if item is not found

    const totalCartQuantity = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);

    if (action === "increase") {
        if (cartItems[itemName].quantity >= Max_Per_Items) {
            alert(`You can't add more than ${Max_Per_Items} of this item to the cart!`);
            return;
        }
        if (totalCartQuantity >= Max_Total_Items) {
            alert(`You can't add more than ${Max_Total_Items} total items to the cart!`);
            return;
        }
        cartItems[itemName].quantity += 1;
    } else if (action === "decrease") {
        cartItems[itemName].quantity -= 1;
        if (cartItems[itemName].quantity === 0) {
            delete cartItems[itemName];
        }
    } else if (action === "remove") {
        if(confirm("if you want to delete")) {
        delete cartItems[itemName];


        }
    }

    saveCart();
    updateCart();
}



}

cartDropdwonToggle();


