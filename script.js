const appleImages = document.querySelectorAll(".s_apple");
const mainAppleImage = document.querySelector(".small_card .image img");
const colorText = document.querySelector(".main_card .color");
const smallCard = document.querySelector(".small_card");

appleImages.forEach((apple, index) => {
  apple.addEventListener("click", () => {
    mainAppleImage.src = apple.src;

    switch (index) {
      case 0:
        colorText.textContent = "Selected Color: Red Apple";
        smallCard.style.backgroundColor = "#ff4d4d";
        break;
      case 1:
        colorText.textContent = "Selected Color: Green Apple";
        smallCard.style.backgroundColor = "#85e085";
        break;
      case 2:
        colorText.textContent = "Selected Color: Yellow Apple";
        smallCard.style.backgroundColor = "#fdfd96";
        break;
      case 3:
        colorText.textContent = "Selected Color: Purple Apple";
        smallCard.style.backgroundColor = "#d5b9f7";
        break;
    }
  });
});
