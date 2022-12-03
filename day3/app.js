const keys = document.querySelectorAll("a");

keys.forEach((key, index) =>
  key.addEventListener("click", (e) => {
    e.preventDefault();
    const audio = new Audio(`./audio/key-${index}.mp3`);
    audio.play();
  })
);
