function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const cross = document.querySelector(".close");
const submit = document.querySelector(".btn-submit");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const location1 = document.querySelector("#location1");
const location2 = document.querySelector("#location2");
const location3 = document.querySelector("#location3");
const location4 = document.querySelector("#location4");
const location5 = document.querySelector("#location5");
const location6 = document.querySelector("#location6");
const checkbox1 = document.querySelector("#checkbox1");
const form = document.querySelector(".modal-body");
const message = document.querySelectorAll(".modal-body")[1];
const closeButton = document.querySelector(".btn-validate");
let error;
const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
cross.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// submit modal event
submit.addEventListener("click", submitModal);

// submit modal form
function submitModal(e) {
  e.preventDefault();

  document.querySelectorAll(".error-message").forEach((e) => e.remove());
  error = false;

  if (firstName.value.length < 2) {
    addAfterElement(
      "p",
      "error-message",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
      "#first"
    );

    error = true;
  }

  if (lastName.value.length < 2) {
    addAfterElement(
      "p",
      "error-message",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
      "#last"
    );

    error = true;
  }

  if (!email.value.match(emailRegex)) {
    addAfterElement(
      "p",
      "error-message",
      "Vous devez entrer une adresse email valide",
      "#email"
    );

    error = true;
  }

  if (birthdate.value.length !== 10) {
    addAfterElement(
      "p",
      "error-message",
      "Vous devez entrer votre date de naissance.",
      "#birthdate"
    );

    error = true;
  }

  if (quantity.value.length < 1) {
    addAfterElement(
      "p",
      "error-message",
      "Vous devez indiquer un nombre.",
      "#quantity"
    );

    error = true;
  }

  if (
    !location1.checked &&
    !location2.checked &&
    !location3.checked &&
    !location4.checked &&
    !location5.checked &&
    !location6.checked
  ) {
    addAfterElement(
      "p",
      "error-message",
      "Vous devez choisir une option.",
      "#location6"
    );

    error = true;
  }

  if (!checkbox1.checked) {
    addAfterElement(
      "p",
      "error-message",
      "Vous devez vérifier que vous acceptez les termes et conditions.",
      "#checkbox1"
    );

    error = true;
  }

  if (error) {
    return;
  }

  // document.forms["reserve"].submit();
  form.innerHTML = "";
  message.classList.remove("hidden");

  return;
}

closeButton.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  modalbg.style.display = "none";
}

function addAfterElement(tag, className, content, Element) {
  const newElement = document.createElement(tag);
  const newContent = document.createTextNode(content);

  newElement.appendChild(newContent);
  newElement.classList.add(className);

  const previousElement = document.querySelector(Element).parentNode;
  previousElement.append(newElement);
}
