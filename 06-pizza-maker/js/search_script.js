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
  fadIn();
  fadOut();
});
// End of the creating DOM content at page load time

// ---------------------------------------------------------------------------------------------------

// Definition of the visibility function
function fadOut() {
  let searchBox = document.getElementById("search-box");
  let searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", function () {
    searchBox.classList.add("active");
    searchBox.style.transition = "all 0.5s cubic-bezier(0.7, -0.5, 0.3, 1.5)";
  });
}
// End of the definition of the visibility function

// ---------------------------------------------------------------------------------------------------

// Definition of the fading function
function fadIn() {
  let searchBox = document.getElementById("search-box");
  let cancelButton = document.getElementById("cancel-button");
  let cancelIcon = cancelButton.firstElementChild;
  cancelIcon.addEventListener("click", function () {
    searchBox.classList.remove("active");
    searchBox.style.transition = "all 0.5s cubic-bezier(0.7, -0.5, 0.3, 1.5)";
  });
}
// End of the definition of the fading function

// ---------------------------------------------------------------------------------------------------

// Definition of the Promise class
var promise = new Promise(function (resolve, reject) {
  loadAPIData();
  resolve();
})
  .then(() => {
    productSearch();
  })
  .then(() => {
    reloadProductSearch();
  });
// End of the definition of the Promise class

// ---------------------------------------------------------------------------------------------------

// Definition of the data fetch function
var productList = [];
function loadAPIData() {
  let foodApiUrl = "data/food_data.json";
  fetch(foodApiUrl)
    .then((result) => result.json())
    .then((result) => {
      result.product_groups.forEach((group) => {
        group.group_products.forEach((product) => {
          productList.push({
            group_title: group.group_title,
            product_name: product.product_name,
            product_type: product.product_type,
            product_price: product.product_price,
            product_image: product.product_image,
          });
        });
      });
    });
}
// End of the definition of the data fetch function

// ---------------------------------------------------------------------------------------------------

// Product search function definition
function productSearch() {
  let txtInput = document.querySelector("[type='text']");
  txtInput.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      loadElementsAfterSearch();
    }
  });
}
// End of product search function definition

// ---------------------------------------------------------------------------------------------------

// Defining a function to load elements after searching
function loadElementsAfterSearch() {
  let txtInput = document.querySelector("[type='text']");
  let searchResultBox = document.getElementById("search-result-box");
  searchResultBox.innerHTML = "";
  let searchBoxTitle = document.createElement("h1");
  searchBoxTitle.className = "search-box__title";
  searchResultBox.appendChild(searchBoxTitle);
  let hasMatch = false;
  const query = txtInput.value.trim();
  productList.forEach((product) => {
    if (
      product.product_name.includes(query) ||
      product.group_title.includes(query)
    ) {
      hasMatch = true;
      searchBoxTitle.textContent = "نتیجه جستجوی شما :";
      let searchBoxProduct = document.createElement("div");
      let searchBoxImage = document.createElement("div");
      let productImage = document.createElement("img");
      let productName = document.createElement("h3");
      let productType = document.createElement("strong");
      let productPrice = document.createElement("strong");

      searchBoxProduct.className = "search-box__product";
      searchBoxImage.className = "search-box__image";
      productType.className = "search-box__type";
      productPrice.className = "search-box__price";

      productImage.src = product.product_image[0];
      productName.textContent = product.product_name;
      productType.innerText = product.product_type[0];
      productPrice.innerText = product.product_price[0] + " تومان";

      searchBoxImage.appendChild(productImage);
      searchBoxImage.appendChild(productName);

      searchBoxProduct.appendChild(searchBoxImage);
      searchBoxProduct.appendChild(productType);
      searchBoxProduct.appendChild(productPrice);

      searchResultBox.appendChild(searchBoxProduct);
    }
  });
  if (!hasMatch) {
    searchBoxTitle.innerText = "نتیجه‌ای یافت نشد!";
  }
}
// End of defining a function to load elements after searching

// ---------------------------------------------------------------------------------------------------

// Product search reload definition
function reloadProductSearch() {
  let txtInput = document.querySelector("[type='text']");
  let searchResultBox = document.getElementById("search-result-box");

  txtInput.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      while (searchResultBox.firstChild) {
        searchResultBox.removeChild(searchResultBox.firstChild);
      }
    }
  });
}
// End of product search reload definition

// ---------------------------------------------------------------------------------------------------

// Definition of the update cart count
function updateShopCartCount() {
  const shopCarts = JSON.parse(localStorage.getItem("shopCarts") || "[]");

  const cartCount = shopCarts.length;
  const cartCountElements = document.querySelectorAll("#shop-cart");

  cartCountElements.forEach((element) => {
    element.innerText = `(${cartCount})`;
  });
}
// End of definition of the update cart count

// ---------------------------------------------------------------------------------------------------

// Definition of update cart count
function updateCartCount() {
  const shopCarts = JSON.parse(window.localStorage.getItem("shopCarts")) || [];
  const cartCount = document.querySelector(".navbar-menu__left span");
  if (cartCount) {
    cartCount.textContent = `(${shopCarts.length})`;
  }
}
// End of definition of update cart count

// pageshow also runs when the page is restored by the back button
window.addEventListener("pageshow", updateCartCount);

// -----------------------------------------------------------------------------------------
