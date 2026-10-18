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
  loadFoodItems();
});

// ---------------------------------------------------------------------------------------------------

let offsetX = 0;
let offsetY = 0;
// Defining the function to load food file items
function loadFoodItems() {
  let apiFoodItemsUrl = "data/food-items.json";
  fetch(apiFoodItemsUrl)
    .then((result) => result.json())
    .then((result) => {
      result.items.forEach((item) => {
        let itemBox = document.getElementById("item-box");
        let imageBox = document.createElement("div");
        imageBox.className = "image-box ";

        for (let i = 0; i < item.qty; i++) {
          let qtyImage = document.createElement("img");
          qtyImage.setAttribute("src", item.image);
          qtyImage.setAttribute("draggable", true);
          qtyImage.setAttribute("id", item.id + "_" + i);
          qtyImage.dataset.price = item.price;
          qtyImage.dataset.calorie = item.calorie;
          qtyImage.className = "image";
          imageBox.appendChild(qtyImage);

          // Define the drag start event for the desired element
          qtyImage.addEventListener("dragstart", function (event) {
            qtyImage.style.left = "0";
            qtyImage.style.top = "0";
            const rect = qtyImage.getBoundingClientRect();
            offsetX = event.clientX - rect.left;
            offsetY = event.clientY - rect.top;

            let dataTransferObjects = {
              id: qtyImage.getAttribute("id"),
              price: qtyImage.dataset.price,
              calorie: qtyImage.dataset.calorie,
            };

            event.dataTransfer.setData(
              "text/plain",
              JSON.stringify(dataTransferObjects),
            );
          });
        }
        itemBox.appendChild(imageBox);
      });
    });
}

// ---------------------------------------------------------------------------------------------------

// Define the drag over function for the desired element
function dragOver(event) {
  event.preventDefault();
}

// ---------------------------------------------------------------------------------------------------

// Define the drop function for the desired element
function drop(event) {
  event.preventDefault();
  let totalPrice = document.getElementById("total-price");
  let totalCalorie = document.getElementById("total-calorie");
  let receiveDataTransferObjects = JSON.parse(
    event.dataTransfer.getData("text/plain"),
  );
  let itemId = receiveDataTransferObjects.id;
  let price = parseInt(receiveDataTransferObjects.price);
  let calorie = parseInt(receiveDataTransferObjects.calorie);

  let item = document.getElementById(itemId);
  // Count the price and calorie only the first time an item is dropped
  if (!item.dataset.placed) {
    item.dataset.placed = "true";
    totalPrice.innerText = parseInt(totalPrice.innerText) + price;
    totalCalorie.innerText = parseInt(totalCalorie.innerText) + calorie;
  }
  let dropZone = document.getElementById("drop-zone");

  const targetRect = dropZone.getBoundingClientRect();
  const left = event.clientX - targetRect.left - offsetX;
  const top = event.clientY - targetRect.top - offsetY;

  item.style.position = "absolute";
  item.style.left = left + "px";
  item.style.top = top + "px";
  item.style.width = "57px";
  item.style.height = "57px";

  dropZone.appendChild(item);
}

// ---------------------------------------------------------------------------------------------------

let rotation = 0;
let rotationTarget = 0;
let isBaking = false;

function rotateCW() {
  let dropZone = document.getElementById("drop-zone");
  rotation += 10;
  dropZone.style.transform = `rotate(${rotation}deg)`;

  if (rotation >= rotationTarget) {
    isBaking = false;
    window.alert("پیتزای شما آماده است");
    return;
  }
  setTimeout(() => {
    window.requestAnimationFrame(rotateCW);
  }, 100);
}

let makingButton = document.getElementById("making-btn");
makingButton.addEventListener("click", function () {
  if (isBaking) return;
  isBaking = true;
  rotationTarget = rotation + 1700;
  rotateCW();
});

// ---------------------------------------------------------------------------------------------------
