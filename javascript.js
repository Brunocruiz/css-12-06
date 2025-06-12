const letters = document.querySelectorAll(".letter");
const lettersContainer = document.querySelector(".letters");
let zIndexCounter = 10;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const shuffledThings = Array.from(letters);
shuffleArray(shuffledThings);

shuffledThings.forEach((letter) => {
  lettersContainer.appendChild(letter);
  const center = document.querySelector(".cssletter").offsetWidth / 2 - letter.offsetWidth / 2;
  letter.style.left = `${center}px`;

  function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }

  if (!isOverflown(letter)) {
    letter.classList.add("center");
  }
  let offsetX, offsetY;
  letter.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") {
    const rect = letter.getBoundingClientRect();
    letter.style.position = "fixed";
    letter.style.zIndex = zIndexCounter++;

    // Centraliza a letter na tela
    letter.style.left = `${window.innerWidth / 2 - rect.width / 2}px`;
    letter.style.top = `${window.innerHeight / 2 - rect.height / 2}px`;
  }
});

});
document.querySelector("#openEnvelope").addEventListener("click", () => {
  document.querySelector(".envelope").classList.add("active");
});