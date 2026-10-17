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

// Definition of the position change function
function ChangPositionFun() {
  let Elements = document.getElementsByClassName("grid-box__title");
  for (let i = 0; i < Elements.length; i++) {
    const Element = Elements[i];
    function MouseOverFunction() {
      Element.style.clipPath = "polygon(100% 0, 100% 100%, 0 100%, 0 0)";
      Element.style.textAlign = "center";
      Element.style.transition = "all 0.5s ease";
    }
    Element.addEventListener("mouseover", MouseOverFunction);
    function MouseLeaveFunction() {
      Element.style.clipPath = "polygon(100% 30%, 100% 100%, 0 100%, 0 80%)";
      Element.style.textAlign = "right";
    }
    Element.addEventListener("mouseleave", MouseLeaveFunction);
  }
}
// End of the position change function

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
                    "product_image": "images/food_images/jhamboon-tanoori.jpg",
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
                "product_image": "images/food_images/chicken-pizza.jpg",
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
                "product_image": "images/food_images/shredded-kebab.png",
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
                "product_image": "images/food_images/leaf-kebab.jpg",
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

// Variable definition to create elements on the page
var imageMainBody = document.getElementById("image-main-body");
var foodMenu = document.createElement("div");
var foodMenuGirdSection = document.createElement("div");

// Adding elements to the page
foodMenu.appendChild(foodMenuGirdSection);
imageMainBody.appendChild(foodMenu);

//Adding classes to elements
foodMenu.classList.add("food-menu");
foodMenuGirdSection.classList.add("food-menu__gird-section");

// Navigating using a foreach loop and adding JSON data inside elements
jsFoodData.product_groups.forEach((group) => {
  let gridBoxes = document.createElement("div");
  let gridBoxImage = document.createElement("img");
  let gridBoxTitle = document.createElement("div");
  let pElementGridBox = document.createElement("p");
  let aLink = document.createElement("a");

  pElementGridBox.appendChild(aLink);
  gridBoxTitle.appendChild(pElementGridBox);
  foodMenuGirdSection.appendChild(gridBoxes);
  gridBoxes.appendChild(gridBoxImage);
  gridBoxes.appendChild(gridBoxTitle);

  gridBoxTitle.classList.add("grid-box__title");
  gridBoxes.classList.add("grid-box");
  gridBoxImage.classList.add("image");
  aLink.style.cursor = "pointer";

  gridBoxImage.src = `${group.group_image}`;
  aLink.textContent = `${group.group_title}`;

  ChangPositionFun();

  aLink.addEventListener("click", () => {
    aLink.setAttribute(
      "href",
      "menu_page.html?" + `groupTitle=${group.group_title}`,
    );
  });
});
// End of navigating using a foreach loop and adding JSON data inside elements
