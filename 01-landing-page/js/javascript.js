window.onscroll = function () {
  ScrollFunction();
};

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

ChangPositionFun();

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
