const keys = document.querySelectorAll(".key");

const selectKey = (key) => key.classList.add("jiggle");
const clearKey = (key) => key.classList.remove("jiggle");
const getRandomKey = () => Math.floor(Math.random() * keys.length);

let selectedKey = keys[getRandomKey()];

selectKey(selectedKey);

document.addEventListener("keyup", (e) => {
  if (e.key.toUpperCase() === selectedKey.dataset.key) {
    clearKey(selectedKey);
    selectedKey = keys[getRandomKey()];
    selectKey(selectedKey);
  }
});
