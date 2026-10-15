// Calling the scroll function
window.onscroll = function () {
  ScrollFunction();
};
// End of calling the scroll function

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

// Definition of JSON data
const jsonFoodData = `{
  "product_groups": [{
          "group_id":1,
          "group_title": "ساندویچ",
          "group_image": "images/food_images/sandwich-7-310x260.png",
          "group_products": [{
                  "product_id":1,
                  "product_name": "ژامبون مرغ تنوری",
                  "product_price": 165000,
                  "product_image": "images/food_images/jhamboon_tanoori.jpg",
                  "product_content": [
                      "ژامبون مرغ",
                      "قارچ",
                      "پنیر",
                      "سس مخصوص"
                  ]
              },
              {
                  "product_id":2,
                  "product_name": "هات داگ مخصوص",
                  "product_price": 145000,
                  "product_image": "images/food_images/barbecues-3-310x260.png",
                  "product_content": [
                      "هات داگ",
                      "قارچ",
                      "پنیر",
                      "کاهو",
                      "خیارشور",
                      "گوجه"
                  ]
              },
              {
                  "product_id":3,
                  "product_name": "چیز برگر",
                  "product_price": 176000,
                  "product_image": "images/food_images/burger-7-310x260.png",
                  "product_content": [
                      "همبرگر90 درصد",
                      "پنیر گودا",
                      "سس مخصوص",
                      "گوجه"
                  ]
              },
              {
                  "product_id":4,                    
                  "product_name": "رویال برگر",
                  "product_price": 193000,
                  "product_image": "images/food_images/burgers-3-310x260.png",
                  "product_content": [
                      "همبرگر 90 درصد",
                      "ژامبون گوشت",
                      "قارچ",
                      "پنیر"
                  ]
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
              "product_price": 165000,
              "product_image": "images/food_images/chicken pizza.jpg",
              "product_content": [
                  "فیله مرغ",
                  "قارچ",
                  "فلفل دلمه",
                  "پنیر",
                  "گوجه",
                  "ذرت"
              ]
          }, {
              "product_id":6,                
              "product_name": "پیتزا پنجره ای مخصوص",
              "product_price": 185000,
              "product_image": "images/food_images/member-profile-02-640x481.jpg",
              "product_content": [
                  "ژامبون بره",
                  "قارچ",
                  "پنیر",
                  "گوشت چرخ کرده",
                  "فلفل دلمه"
              ]
          }, {
              "product_id":7,                
              "product_name": "پیتزا پپرونی",
              "product_price": 173000,
              "product_image": "images/food_images/pizzas-5-310x260.png",
              "product_content": [
                  "کالباس پپرونی",
                  "قارچ",
                  "پنیر",
                  "فلفل دلمه"
              ]
          }]
      },
      {
          "group_id":3,
          "group_title": "کباب",
          "group_image": "images/food_images/barbecue-7-310x260.png",
          "group_products": [{
              "product_id":8,                
              "product_name": "کوبیده",
              "product_price": 110000,
              "product_image": "images/food_images/Shredded kebab.png",
              "product_content": [
                  "گوشت چرخ کرده",
                  "پیاز",
                  "نمک",
                  "جوش شیرین"
              ]
          }, {
              "product_id":9,                
              "product_name": "برگ",
              "product_price": 175,
              "product_image": "images/food_images/Leaf kebab.jpg",
              "product_content": [
                  "گوشت گوسفندی",
                  "نمک",
                  "آبلیمو"
              ]
          }]
      }
      
  ]
}`;
// End of definition of JSON data

// Converting JSON data to JavaScript data
const jsFoodData = JSON.parse(jsonFoodData);

// Using the Browser Object Model Tool and Navigation using a foreach loop
var urlParameters = new URLSearchParams(window.location.search);
for (let value of urlParameters.values()) {
  let bannerTitle = document.getElementById("banner-title");
  bannerTitle.textContent = `${value}`;
  let titleLink = document.getElementById("title-link");
  titleLink.textContent = `${value}`;

  let backgroundMenu = document.getElementById("background-menu");

  jsFoodData.product_groups.forEach((group) => {
    if (group.group_title === value) {
      group.group_products.forEach((product) => {
        let ulElements = document.createElement("ul");

        backgroundMenu.appendChild(ulElements);
        ulElements.classList.add("ul-list");

        let liItem = document.createElement("li");
        let foodTitleAndPrice = document.createElement("div");
        let foodTitle = document.createElement("a");
        let foodPrice = document.createElement("span");
        let foodContent = document.createElement("div");
        let foodContentTitle = document.createElement("p");

        liItem.classList.add("li-list");
        foodTitleAndPrice.classList.add("food-title-and-price");
        foodTitle.classList.add("food-title");
        foodPrice.classList.add("food-price");
        foodContent.classList.add("food-content");
        foodContentTitle.classList.add("food-content-title");

        foodTitle.setAttribute(
          "href",
          "food_details.html?" +
            `group_id=${group.group_id}&product_id=${product.product_id}&product_name=${product.product_name}&group_title=${group.group_title}`
        );

        foodTitleAndPrice.appendChild(foodTitle);
        foodTitleAndPrice.appendChild(foodPrice);
        foodContent.appendChild(foodContentTitle);
        liItem.appendChild(foodTitleAndPrice);
        liItem.appendChild(foodContent);
        ulElements.appendChild(liItem);

        foodTitle.innerText = `${product.product_name}`;
        foodPrice.innerText = ` قیمت : ${product.product_price} تومان`;
        foodContentTitle.innerText = `محتویات: ${product.product_content.join(
          ", "
        )}`;
      });
    }
  });
}
// End of using the Browser Object Model
