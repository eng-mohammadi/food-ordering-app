// Calling the scroll function
window.onscroll = function () {
  ScrollFunction();
};
// End of calling the scroll function

// ---------------------------------------------------------------------------------------------------

// Function to change the navbar style on scroll
function ScrollFunction() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let Navbar = document.getElementById("navbar");
  let NavbarMenu = document.getElementById("navbar-menu");
  if (scrollTop >= 150) {
    Navbar.style.position = "sticky";
    Navbar.style.top = "0";
    NavbarMenu.style.width = "100%";
    NavbarMenu.style.zIndex = "9999";
    NavbarMenu.style.borderRadius = "0";
    NavbarMenu.style.transition = "all 0.3s linear";
  } else {
    Navbar.style.position = "";
    Navbar.style.top = "";
    NavbarMenu.style.width = "";
    NavbarMenu.style.borderRadius = "";
    NavbarMenu.style.transition = "";
  }
}
// End of function to change the navbar style on scroll

// ---------------------------------------------------------------------------------------------------

// Creating DOM content at page load time
document.addEventListener("DOMContentLoaded", function () {
  loadShopCarts();
  addOrRemoveProductButton();
  removeProductFromShopCart();
});
// End of the creating DOM content at page load time

// ---------------------------------------------------------------------------------------------------

// function to add the number of products
function addNumberProducts() {
  let shopCartCount = document.getElementById("shop-cart__count").innerText;
  shopCartCount = parseInt(shopCartCount.slice(1, -1));
  shopCartCount += window.localStorage.length;
  document.getElementById("shop-cart__count").innerText = `(${shopCartCount})`;

  let shopCartsTitle = document.getElementById("shop-carts__title").innerText;
  shopCartsTitle = parseInt(shopCartsTitle.slice(1, -1));
  shopCartsTitle += window.localStorage.length;
  document.getElementById("shop-carts__title").innerText =
    `(${shopCartsTitle})`;
}
// End of the function to add the number of products

// ---------------------------------------------------------------------------------------------------

// Cart loading function
function loadShopCarts() {
  let table = document.getElementById("table");
  let jsShopCarts = JSON.parse(window.localStorage.getItem("shopCarts"));
  let totalPrice = document.getElementById("total-price");
  let totalPriceArray = [];

  jsShopCarts.forEach((product) => {
    // let discountPrice =
    //   product.productPrice - (product.productPrice * product.discount) / 100;
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let numberDiv = document.createElement("div");
    numberDiv.classList.add("number-div");

    let plusSpan = document.createElement("span");
    plusSpan.innerText = "+";
    plusSpan.classList.add("plus-span");

    let inputNumber = document.createElement("input");
    inputNumber.type = "number";
    inputNumber.value = product.quantity;
    inputNumber.classList.add("input-number");
    inputNumber.setAttribute("min", "1");
    inputNumber.setAttribute("max", "20");

    let minusSpan = document.createElement("span");
    minusSpan.innerText = "-";
    minusSpan.classList.add("minus-span");
    numberDiv.appendChild(plusSpan);
    numberDiv.appendChild(inputNumber);
    numberDiv.appendChild(minusSpan);
    td1.appendChild(numberDiv);
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    let img = document.createElement("img");
    img.src = product.productImage;
    img.classList.add("td-img");
    td2.appendChild(img);
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = product.productName + " (" + product.productType + ")";
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    // td4.textContent = discountPrice + " تومان";
    td4.textContent = product.productPrice + " تومان";
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.textContent = product.quantity + " عدد";
    tr.appendChild(td5);

    let td6 = document.createElement("td");
    // td6.textContent = product.quantity * discountPrice + " تومان";
    td6.textContent = product.quantity * product.productPrice + " تومان";
    tr.appendChild(td6);

    let td7 = document.createElement("td");
    let aTdLink = document.createElement("a");
    let iIcon = document.createElement("i");
    iIcon.dataset.type = product.productType;
    iIcon.classList.add("fa-solid", "fa-xmark");
    aTdLink.appendChild(iIcon);
    td7.appendChild(aTdLink);
    tr.appendChild(td7);

    table.appendChild(tr);

    // totalPriceArray.push(product.quantity * discountPrice);
    totalPriceArray.push(product.quantity * product.productPrice);

    addNumberProducts();
  });
  totalPrice.innerText = sum(...totalPriceArray) + " تومان";
}
// End of the cart loading function

// ---------------------------------------------------------------------------------------------------

// Define the function of the add or remove product button
function addOrRemoveProductButton() {
  let inputDivs = document.getElementsByClassName("number-div");
  let table = document.getElementById("table");
  let tBody = table.children;
  let jsShopCarts = JSON.parse(window.localStorage.getItem("shopCarts"));
  let totalPrice = document.getElementById("total-price");
  let totalPriceArray = [];
  for (let i = 0; i < inputDivs.length; i++) {
    let inputDiv = inputDivs[i];
    let trs = tBody[i];
    let quantity = jsShopCarts[i].quantity;
    // let discountPrice =
    //   jsShopCarts[i].productPrice -
    //   (jsShopCarts[i].productPrice * jsShopCarts[i].discount) / 100;
    let price = jsShopCarts[i].productPrice;
    let node = trs.lastChild;
    let td6 = node.previousSibling;
    let td5 = td6.previousSibling;

    let plusSpan = inputDiv.querySelector(".plus-span");
    let inputNumber = inputDiv.querySelector("input[type=number]");
    let minusSpan = inputDiv.querySelector(".minus-span");
    let countPlus = parseInt(inputNumber.value);

    plusSpan.addEventListener("click", function () {
      quantity++;
      td5.innerText = `${quantity} عدد`;
      // td6.innerText = `${discountPrice * quantity} تومان`;
      td6.innerText = `${price * quantity} تومان`;
      for (let i = 0; i < tBody.length; i++) {
        let trs = tBody[i];
        let node = trs.lastChild;
        let td6 = node.previousSibling;
        totalPriceArray.push(parseInt(td6.innerText.replace(" تومان", "")));
        totalPrice.innerText = sum(...totalPriceArray) + " تومان";
      }
      totalPriceArray = [];

      if (countPlus < 20) {
        countPlus++;
        inputNumber.value = countPlus;
      }
    });

    minusSpan.addEventListener("click", function () {
      if (countPlus > 1) {
        countPlus--;
        inputNumber.value = countPlus;
        quantity--;
        td5.innerText = `${quantity} عدد`;
        // td6.innerText =
        //   parseInt(td6.innerText.replace(" تومان", "")) -
        //   discountPrice +
        //   " تومان";
        td6.innerText =
          parseInt(td6.innerText.replace(" تومان", "")) - price + " تومان";
        for (let i = 0; i < tBody.length; i++) {
          let trs = tBody[i];
          let node = trs.lastChild;
          let td6 = node.previousSibling;
          totalPriceArray.push(parseInt(td6.innerText.replace(" تومان", "")));
          totalPrice.innerText = sum(...totalPriceArray) + " تومان";
        }
        totalPriceArray = [];
      }
    });
  }
}
// End of the define the function of the add or remove product button

// ---------------------------------------------------------------------------------------------------

// Definition of the function to remove a product from the shopping cart
function removeProductFromShopCart() {
  let iIcons = document.querySelectorAll(".fa-xmark");

  iIcons.forEach((iIcon) => {
    iIcon.addEventListener("click", function (event) {
      let table = document.getElementById("table");
      let tBody = table.children;
      let totalPrice = document.getElementById("total-price");
      let totalPriceArray = [];
      let shopCarts = JSON.parse(window.localStorage.getItem("shopCarts"));

      for (let i = 0; i < tBody.length; i++) {
        let trNodes = tBody[i];
        let lastChildTd = trNodes.lastChild.lastChild.lastChild;
        if (lastChildTd === event.target) {
          trNodes.parentNode.removeChild(trNodes);
          shopCarts.splice(i, 1);
          window.localStorage.setItem("shopCarts", JSON.stringify(shopCarts));
        }
        if (JSON.parse(window.localStorage.getItem("shopCarts")).length === 0) {
          window.localStorage.clear();
          alert("سبد خرید شما خالی شد!");
        }
      }

      let shopCartsTitle =
        document.getElementById("shop-carts__title").innerText;
      shopCartsTitle = parseInt(shopCartsTitle.slice(1, -1));
      shopCartsTitle--;
      document.getElementById("shop-carts__title").innerText =
        `(${shopCartsTitle})`;

      let shopCartCount = document.getElementById("shop-cart__count").innerText;
      shopCartCount = parseInt(shopCartCount.slice(1, -1));
      shopCartCount--;
      document.getElementById("shop-cart__count").innerText =
        `(${shopCartCount})`;

      for (let i = 0; i < tBody.length; i++) {
        let trs = tBody[i];
        let node = trs.lastChild;
        let td6 = node.previousSibling;
        totalPriceArray.push(parseInt(td6.innerText.replace(" تومان", "")));
      }
      totalPrice.innerText = sum(...totalPriceArray) + " تومان";
      totalPriceArray = [];
    });
  });
}
// End of the definition of the function to remove a product from the shopping cart

// ---------------------------------------------------------------------------------------------------

// Definition of the sum function
function sum(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
// End of the definition of the sum function

// ---------------------------------------------------------------------------------------------------
