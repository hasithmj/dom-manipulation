// Selecting Elements

const redColor = document.querySelector(".red");
const grayColor = document.querySelector(".gray");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const cartButton = document.querySelector("#button");
const feedbackBtn = document.querySelector(".feedback");
const itemTag = document.getElementsByTagName("h3")[0];






// Modifying Elements
// - Add Event Listeners

// - Red Color
redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/cH2pJdny/red-benz.webp")';
  });

   // - Gray Color
grayColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/BvyYTMQ2/gray-benz.jpg")';
  });

// - Black Color
blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("./img/black-benz.jpg")';
  });

  
// Button Click Implementation
// - Cart Button
const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
  };
cartButton.addEventListener("click", cart);

 