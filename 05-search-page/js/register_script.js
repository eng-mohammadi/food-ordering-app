// Creating DOM content at page load time
document.addEventListener("DOMContentLoaded", function () {
  popupAndPopUnder();
});

// ----------------------------------------------------------------------------------

// Define animation function for opening and closing window
function popupAndPopUnder() {
  const buttonPopup = document.getElementById("btn-popup");
  const popupForm = document.getElementById("popup-form");
  const registerForm = document.getElementById("register-form");

  buttonPopup.addEventListener("click", () => {
    if (registerForm.style.visibility === "hidden") {
      popupForm.classList.add("active");
      registerForm.style.visibility = "visible";
      popupForm.style.transition = "all 0.3s cubic-bezier(0.7, -0.5, 0.3, 1.5)";
      buttonPopup.classList.add("active");
    } else {
      popupForm.classList.remove("active");
      registerForm.style.visibility = "hidden";
      popupForm.style.transition = "all 0.3s cubic-bezier(0.7, -0.5, 0.3, 1.5)";
      buttonPopup.classList.remove("active");
    }
  });
}

// ----------------------------------------------------------------------------------

// Class definition for form validation
class FormValidator {
  constructor(registerForm) {
    this.__RegisterForm = registerForm;
    this.submitHandler();
    this.focusinHandler();
  }

  submitHandler() {
    this.__RegisterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let inputs = document.querySelectorAll("input");
      let errorList = document.getElementById("error-list");

      for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        let dataValidation = input.dataset.validation;
        if (dataValidation) {
          let dataValidationArray = dataValidation.split(" ");
          for (let i = 0; i < dataValidationArray.length; i++) {
            let elementFunction = dataValidationArray[i];
            let message = this[elementFunction](input);

            if (message.length > 0) {
              let liElements = document.createElement("li");
              liElements.textContent = message;
              errorList.appendChild(liElements);
            } else {
              while (errorList.firstChild) {
                errorList.removeChild(errorList.firstChild);
              }
            }
          }
        }
      }
      if (errorList.children.length === 0) {
        console.log("reza");
        this.__RegisterForm.submit();
      }
    });
  }

  focusinHandler() {
    this.__RegisterForm.addEventListener("focusout", (event) => {
      event.preventDefault();
      let dataValidation = event.target.dataset.validation;
      let errorList = document.getElementById("error-list");

      if (dataValidation) {
        let dataValidationArray = dataValidation.split(" ");
        for (let i = 0; i < dataValidationArray.length; i++) {
          let elementFunction = dataValidationArray[i];
          let message = this[elementFunction](event.target);
          if (message.length > 0) {
            let liElements = document.createElement("li");
            liElements.textContent = message;
            errorList.appendChild(liElements);
          } else {
            while (errorList.firstChild) {
              errorList.removeChild(errorList.firstChild);
            }
          }
        }
      }
    });
  }

  notEmptyName(element) {
    if (element.value === "") {
      return "فیلد نام نباید خالی باشد";
    } else {
      return "";
    }
  }

  notEmptyFamily(element) {
    if (element.value === "") {
      return "فیلد نام خانوادگی نباید خالی باشد";
    } else {
      return "";
    }
  }

  notEmptyMobile(element) {
    if (element.value === "") {
      return "فیلد موبایل نباید خالی باشد";
    } else {
      return "";
    }
  }

  isBetweenName(element) {
    if (element.value.length < 3 || element.value.length > 8) {
      return "فیلد نام باید بین 3 تا 8 کارکتر باشد";
    } else {
      return "";
    }
  }

  isBetweenFamily(element) {
    if (element.value.length < 5 || element.value.length > 15) {
      return "فیلد نام خانوادگی باید بین 5 تا 15 کارکتر باشد";
    } else {
      return "";
    }
  }

  isMobile(element) {
    const mobileRegex = /^(09[0139]\d{8})|(\+|00)989[0139]\d{8}$/;
    if (!mobileRegex.test(element.value)) {
      return "فیلد موبایل باید 11 رقم بوده و شامل اعداد بین 0 تا 9 باشد";
    } else {
      return "";
    }
  }
}

// ----------------------------------------------------------------------------------

// Defining an instance of a class
var formValidator = new FormValidator(document.getElementById("register-form"));

// ----------------------------------------------------------------------------------
