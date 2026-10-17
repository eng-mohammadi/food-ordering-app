// Calling the scroll function
window.onscroll = function () {
  ScrollFunction();
  createProductEnergyInHTML();
  createProductProteinInHTML();
};
// End of calling the scroll function

// ------------------------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------------------

// Definition of JSON data
const jsonFoodData = `{
    "product_groups": [
          {
              "group_id":1,
              "group_title": "ساندویچ",
              "group_image": "images/food_images/sandwich-7-310x260.png",
              "group_products": [{
                      "product_id":1,
                      "product_name": "ژامبون مرغ تنوری",
                      "product_type":["normal"],
                      "product_price": [95000],
                      "product_image": ["images/food_images/jhamboon-tanoori.jpg"],
                      "product_content": [
                          "ژامبون مرغ",
                          "قارچ",
                          "پنیر",
                          "سس مخصوص"
                      ],
                      "product_energy":45,
                      "product_protein":83
                  },
                  {
                      "product_id":2,
                      "product_name": "هات داگ مخصوص",
                      "product_type":["normal"],
                      "product_price": [100000],
                      "product_image": ["images/food_images/barbecues-3-310x260.png"],
                      "product_content": [
                          "هات داگ",
                          "قارچ",
                          "پنیر",
                          "کاهو",
                          "خیارشور",
                          "گوجه"
                      ],
                      "product_energy":45,
                      "product_protein":83
                  },
                  {
                      "product_id":3,
                      "product_name": "چیز برگر",
                      "product_type":["normal","double"],
                      "product_price": [110000,155000],
                      "product_image": ["images/food_images/cheeseburger-normal.jpg",
                                        "images/food_images/cheeseburger-double.jpg"],
                      "product_content": [
                          "همبرگر90 درصد",
                          "پنیر گودا",
                          "سس مخصوص",
                          "گوجه"
                      ],
                      "product_energy":45,
                      "product_protein":83
                  },
                  {
                      "product_id":4,                    
                      "product_name": "رویال برگر",
                      "product_type":["normal"],
                      "product_price": [193000],
                      "product_image": ["images/food_images/royal-burger-normal.jpg"],
                      "product_content": [
                          "همبرگر 90 درصد",
                          "ژامبون گوشت",
                          "قارچ",
                          "پنیر"
                      ],
                      "product_energy":45,
                      "product_protein":83
                  }
              ]
          },
          {
              "group_id":2,
              "group_title": "پیتزا",
              "group_image": "images/food_images/pizza-7-310x260.png",
              "group_products": [{
                  "product_id":5,                
                  "product_name": "پیتزا فیله مرغ",
                  "product_type":["mini","normal","large"],
                  "product_price": [110000,145000,210000],
                  "product_image": ["images/food_images/pizza-chiken-mini.jpg",
                                    "images/food_images/pizza-chiken-normal.jpg",
                                    "images/food_images/pizza-chiken-larg.jpg"],
                  "product_content": [
                      "فیله مرغ",
                      "قارچ",
                      "فلفل دلمه",
                      "پنیر",
                      "گوجه",
                      "ذرت"
                  ],
                  "product_energy":32,
                  "product_protein":79
              }, {
                  "product_id":6,                
                  "product_name": "پیتزا پنجره ای مخصوص",
                  "product_type":["mini","normal","large"],
                  "product_price": [125000,185000,230000],
                  "product_image": ["images/food_images/pizza-panjareei-mini.jpg",
                                    "images/food_images/pizza-panjareei-normal.jpg",
                                    "images/food_images/pizza-panjareei-larg.jpg"],
                  "product_content": [
                      "ژامبون بره",
                      "قارچ",
                      "پنیر",
                      "گوشت چرخ کرده",
                      "فلفل دلمه"
                  ],
                  "product_energy":45,
                  "product_protein":83
              }, {
                  "product_id":7,                
                  "product_name": "پیتزا پپرونی",
                  "product_type":["mini","normal","large"],
                  "product_price": [105000,135000,190000],
                  "product_image": ["images/food_images/pizza-peperooni-mini.jpg",
                                    "images/food_images/pizza-peperooni-normal.jpg",
                                    "images/food_images/pizza-peperooni-larg.jpg"],
                  "product_content": [
                      "کالباس پپرونی",
                      "قارچ",
                      "پنیر",
                      "فلفل دلمه"
                  ],
                  "product_energy":51,
                  "product_protein":56
              }]
          },
          {
              "group_id":3,
              "group_title": "کباب",
              "group_image": "images/food_images/barbecue-7-310x260.png",
              "group_products": 
              [
                  {
                      "product_id":8,                
                      "product_name": "کوبیده",
                      "product_type":["single","double"],
                      "product_price": [45000,85000],
                      "product_image": ["images/food_images/kabab-koobideh-singel.jpg",
                                        "images/food_images/kabab-koobideh-double.jpg"],
                      "product_content": [
                          "گوشت چرخ کرده",
                          "پیاز",
                          "نمک",
                          "جوش شیرین"
                      ],
                      "product_energy":45,
                      "product_protein":83
                  }, 
                  {
                      "product_id":9,                
                      "product_name": "برگ",
                      "product_type":["normal"],
                      "product_price": [130000],
                      "product_image": ["images/food_images/leaf-kebab.jpg"],
                      "product_content": [
                          "گوشت گوسفندی",
                          "نمک",
                          "آبلیمو"
                      ],
                      "product_energy":45,
                      "product_protein":83
                  }
              ]
          }
          
      ]
  }`;

const jsonFoodDataDiscount = `{
    "Discounts": [
        { "group_id": 0, "group_title": "ساندویچ", "discount": 20 },
        { "group_id": 1, "group_title": "پیتزا", "discount": 35 },
        { "group_id": 2, "group_title": "کباب", "discount": 50 },
        { "group_id": 3, "group_title": "نوشیدنی", "discount": 25 },
        { "group_id": 4, "group_title": "سالاد", "discount": 65 },
        { "group_id": 5, "group_title": "سوپ", "discount": 40 },
        { "group_id": 6, "group_title": "دسر", "discount": 35 }
    ]
}`;
// End of definition of JSON data

// -----------------------------------------------------------------------------------------

// Creating DOM content at page load time
var jsFoodData = JSON.parse(jsonFoodData);
var jsFoodDataDiscount = JSON.parse(jsonFoodDataDiscount);
document.addEventListener("DOMContentLoaded", function () {
  getUrlParameters();
  createImagesInHTML();
  createProductNameInHTML();
  createProductContentInHTML();
  createProductPriceInHTML();
  createProductTypeInHTML();
  createProductEnergyInHTML();
  createProductProteinInHTML();
  addProductsOnClick();
});
// End of the creating DOM content at page load time

// -----------------------------------------------------------------------------------------

// Definition of function to read from url address
var urlParams = new URLSearchParams(window.location.search);
function getUrlParameters() {
  for (let value of urlParams.values()) {
    jsFoodData.product_groups.forEach((group) => {
      group.group_products.forEach((product) => {
        if (value === product.product_name) {
          let bannerTitle = document.getElementById("banner-title");
          let titleLink = document.getElementById("title-link");
          bannerTitle.innerText = `${value}`;
          titleLink.innerText = `${value}`;
        }
      });
    });
  }
}
// End of definition of function to read from url address

// -----------------------------------------------------------------------------------------

// Definition of the constructor objects
class FoodDiscount {
  constructor(discount) {
    this.discount = discount;
    this.showDiscount = function () {
      let discountArray = [];
      let stringDiscountArray = "";
      jsFoodData.product_groups.forEach((group) => {
        jsFoodDataDiscount.Discounts.forEach((discount) => {
          if (group.group_title === discount.group_title) {
            discountArray.push(discount.discount);
            stringDiscountArray = String(discountArray.splice(0));
          }
        });
      });

      return (this.discount = Number(stringDiscountArray));
    };
  }
}
class GroupProducts extends FoodDiscount {
  constructor(
    discount,
    productName,
    productType,
    productPrice,
    productImage,
    productContent,
    productEnergy,
    productProtein,
  ) {
    super(discount);
    this.productName = productName;
    this.productType = productType;
    this.productPrice = productPrice;
    this.productImage = productImage;
    this.productContent = productContent;
    this.productEnergy = productEnergy;
    this.productProtein = productProtein;

    this.createProductName = function () {
      jsFoodData.product_groups.forEach((groups) => {
        groups.group_products.forEach((product) => {
          if (
            urlParams.has("product_name") &&
            urlParams.get("product_name") === product.product_name
          ) {
            this.productName = product.product_name;
          }
        });
      });
      return this.productName;
    };

    this.createProductType = function () {
      let typesArray = [];
      jsFoodData.product_groups.forEach((groups) => {
        groups.group_products.forEach((product) => {
          if (
            urlParams.has("product_name") &&
            urlParams.get("product_name") === product.product_name
          ) {
            product.product_type.forEach((type) => {
              typesArray.push(type);
            });
          }
        });
      });
      return (this.productType = typesArray);
    };

    this.createProductDiscountPrice = function () {
      let priceArray = [];
      let calculationArray = [];
      jsFoodData.product_groups.forEach((groups) => {
        groups.group_products.forEach((product) => {
          if (
            urlParams.has("product_name") &&
            urlParams.get("product_name") === product.product_name
          ) {
            product.product_price.forEach((price) => {
              priceArray.push(price);
              calculationArray.push(
                (priceArray.splice(0) * this.showDiscount()) / 100,
              );
            });
          }
        });
      });
      return (this.productPrice = calculationArray);
    };

    this.createProductPrice = function () {
      let priceArray = [];
      jsFoodData.product_groups.forEach((groups) => {
        groups.group_products.forEach((product) => {
          if (
            urlParams.has("product_name") &&
            urlParams.get("product_name") === product.product_name
          ) {
            product.product_price.forEach((price) => {
              priceArray.push(price);
            });
          }
        });
      });
      return (this.productPrice = priceArray);
    };

    this.createProductImage = function () {
      let srcImgArray = [];
      jsFoodData.product_groups.forEach((groups) => {
        groups.group_products.forEach((product) => {
          if (
            urlParams.has("product_name") &&
            urlParams.get("product_name") === product.product_name
          ) {
            product.product_image.forEach((srcImg) => {
              srcImgArray.push(srcImg);
            });
          }
        });
      });
      return (this.productImage = srcImgArray);
    };

    this.createProductContentList = function () {
      let contentArray = [];
      jsFoodData.product_groups.forEach((groups) => {
        groups.group_products.forEach((product) => {
          if (
            urlParams.has("product_name") &&
            urlParams.get("product_name") === product.product_name
          ) {
            product.product_content.forEach((content) => {
              contentArray.push(content);
            });
          }
        });
      });
      return (this.productContent = contentArray.join("، "));
    };

    this.createProductEnergy = function () {
      jsFoodData.product_groups.forEach((groups) => {
        groups.group_products.forEach((product) => {
          if (
            urlParams.has("product_name") &&
            urlParams.get("product_name") === product.product_name
          ) {
            this.productEnergy = product.product_energy;
          }
        });
      });
      return this.productEnergy + "%";
    };

    this.createProductProtein = function () {
      jsFoodData.product_groups.forEach((groups) => {
        groups.group_products.forEach((product) => {
          if (
            urlParams.has("product_name") &&
            urlParams.get("product_name") === product.product_name
          ) {
            this.productProtein = product.product_protein;
          }
        });
      });
      return this.productProtein + "%";
    };
  }
}
// End of definition of the constructor objects

// -----------------------------------------------------------------------------------------

// Defining an object of a class
var groupProducts = new GroupProducts();

// -----------------------------------------------------------------------------------------

// Definition of the source of creating image elements on the page
function createImagesInHTML() {
  let largeImage = document.getElementById("large-image");
  let smallImage = document.getElementById("small-image");
  largeImage.className = "large-image";
  smallImage.className = "small-image";
  for (let i = 0; i < groupProducts.createProductImage().length; i++) {
    let imageLargeElements = document.createElement("img");
    imageLargeElements.src = groupProducts.createProductImage()[i];
    let cloneNodeElements = imageLargeElements.cloneNode(true);
    largeImage.appendChild(imageLargeElements);
    smallImage.appendChild(cloneNodeElements);
  }
}
// End of the Definition of the source of creating image elements on the page

// -----------------------------------------------------------------------------------------

// Definition of creating a product name element on the page
function createProductNameInHTML() {
  let foodDetailsTitle = document.getElementById("food-details__title");
  let productName = document.createElement("h4");
  productName.innerText = groupProducts.createProductName();
  foodDetailsTitle.appendChild(productName);
}
// End of definition of creating a product name element on the page

// -----------------------------------------------------------------------------------------

// Definition of creating product contents on the page
function createProductContentInHTML() {
  let foodDetailsContent = document.getElementById("food-details__content");
  foodDetailsContent.innerText = groupProducts.createProductContentList();
}
// End of definition of creating product contents on the page

// -----------------------------------------------------------------------------------------

// Definition of creating product price on the page
function createProductPriceInHTML() {
  let ulPriceList = document.getElementById("price-list");
  for (let i = 0; i < groupProducts.createProductPrice().length; i++) {
    let liPricesList = document.createElement("li");
    let spanPrice = document.createElement("span");
    let delSpanPrice = document.createElement("del");
    let spanDiscountPrice = document.createElement("span");

    delSpanPrice.innerText = groupProducts.createProductPrice()[i] + " تومان";
    spanDiscountPrice.innerText =
      groupProducts.createProductDiscountPrice()[i] + " تومان";

    spanPrice.appendChild(delSpanPrice);
    liPricesList.appendChild(spanPrice);
    liPricesList.appendChild(spanDiscountPrice);
    ulPriceList.appendChild(liPricesList);
    liPricesList.classList.add("li-price__list");
  }
}
// End of definition of creating product contents on the page

// -----------------------------------------------------------------------------------------

// Definition of creating type of product on the page
function createProductTypeInHTML() {
  let productType = document.getElementById("product-type");
  for (let i = 0; i < groupProducts.createProductType().length; i++) {
    let aLinkProductType = document.createElement("a");
    aLinkProductType.innerText = groupProducts.createProductType()[i];
    productType.appendChild(aLinkProductType);
    aLinkProductType.className = "product-type__link";
    productType.className = "product-type";

    // Define the create shopping cart function
    aLinkProductType.addEventListener("click", function () {
      // var xhttp1 = new XMLHttpRequest();
      var xhttp2 = new XMLHttpRequest();
      var Discounts = {};
      var shopCartsItems = {};
      var shopCarts =
        JSON.parse(window.localStorage.getItem("shopCarts")) || [];

      // xhttp1.open("GET", "data/discount_data.json");
      // xhttp1.onreadystatechange = function () {
      //   if (this.readyState === 4 && this.status === 200) {
      //     var jsDiscountData = JSON.parse(this.responseText);

      //     for (let i = 0; i < jsDiscountData.Discounts.length; i++) {
      //       let item = jsDiscountData.Discounts[i];
      //       if (i <= 2 && urlParams.get("group_title") === item.group_title) {
      //         Discounts = {
      //           discount: item.discount,
      //         };
      //       }
      //     }
      //   }
      // };
      // xhttp1.send();

      xhttp2.open("GET", "data/food_data.json");
      xhttp2.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          var jsData = JSON.parse(this.responseText);

          jsData.product_groups.forEach((group) => {
            group.group_products.forEach((product) => {
              if (
                aLinkProductType.innerText === product.product_type[i] &&
                product.product_name === groupProducts.createProductName()
              ) {
                shopCartsItems = {
                  // discount: Discounts.discount,
                  productId: product.product_id,
                  productName: product.product_name,
                  productImage: product.product_image[i],
                  productPrice: product.product_price[i],
                  productType: product.product_type[i],
                  quantity: 1,
                };

                let isProductInCart = false;
                shopCarts.forEach((item) => {
                  if (item.productType === product.product_type[i]) {
                    isProductInCart = true;
                    item.quantity++;
                    product.quantity = item.quantity;
                    window.localStorage.setItem(
                      "shopCarts",
                      JSON.stringify(shopCarts),
                    );
                  }
                });
                if (!isProductInCart) {
                  shopCarts.push(shopCartsItems);
                  window.localStorage.setItem(
                    "shopCarts",
                    JSON.stringify(shopCarts),
                  );

                  let shopCartCount =
                    document.getElementById("shop-cart").innerText;
                  shopCartCount = parseInt(shopCartCount.slice(1, -1));
                  shopCartCount++;
                  document.getElementById("shop-cart").innerText =
                    `(${shopCartCount})`;
                }
              }
            });
          });
        }
      };
      xhttp2.send();
    });
  }
}
// End of the define the create shopping cart function

// End of definition of creating type of product on the page

// -----------------------------------------------------------------------------------------

// Definition of creating product energy on the page with set interval function
var setIntervalValue;
function createProductEnergyInHTML() {
  let dataEnergy = document.querySelector("[data-energy]");
  dataEnergy.dataset.energy = groupProducts.createProductEnergy();
  dataEnergy.innerText = dataEnergy.dataset.energy;

  setIntervalValue = setInterval(() => {
    dataEnergy.style.width = groupProducts.createProductEnergy();
    dataEnergy.style.transition = "all 2s ease-in";
  }, 2000);
}
// End of definition of creating product energy on the page with set interval function

// -----------------------------------------------------------------------------------------

// Definition of creating product protein on the page with set interval function
function createProductProteinInHTML() {
  let dataProtein = document.querySelector("[data-protein]");
  dataProtein.dataset.protein = groupProducts.createProductProtein();
  dataProtein.innerText = dataProtein.dataset.protein;

  setIntervalValue = setInterval(() => {
    dataProtein.style.width = groupProducts.createProductProtein();
    dataProtein.style.transition = "all 2s ease-in";
  }, 2000);
}
// End of definition of creating product protein on the page with set interval function

// -----------------------------------------------------------------------------------------

// Define a function that adds a product on click
function addProductsOnClick() {
  let plusSpan = document.getElementById("plus");
  let minusSpan = document.getElementById("minus");
  let inputNumber = document.getElementById("number");
  let countPlus = 1;
  plusSpan.onclick = function () {
    if (countPlus < 20) {
      countPlus++;
      inputNumber.value = countPlus;
    }
  };
  minusSpan.onclick = function () {
    if (inputNumber.value > 1 && inputNumber.value <= 20) {
      countPlus--;
      inputNumber.value = countPlus;
    }
  };
}
// End of define a function that adds a product on click

// -----------------------------------------------------------------------------------------
