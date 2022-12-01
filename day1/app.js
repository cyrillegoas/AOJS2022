const minutes = document.querySelector(".minutes input");
const seconds = document.querySelector(".seconds input");
const start = document.querySelector(".start");
const settings = document.querySelector(".settings");
const ring = document.querySelector(".ring");
let isRunning = false;
let settingsFlag = false;

const toggleInputs = () => {
  minutes.toggleAttribute("disabled");
  seconds.toggleAttribute("disabled");
};

const toggleRingClass = () => {
  ring.classList.toggle("ending");
};

const editTime = () => {
  // Pause the timer if running
  if (isRunning) toggleRunningState();
  // Enable inputs
  toggleInputs();
  settingsFlag = !settingsFlag;
};

const toggleRunningState = () => {
  // Cannot restart the timer if time = 0
  if (+minutes.value === 0 && +seconds.value === 0) return;
  // Switch the ring to green if red
  if (ring.classList.contains("ending")) toggleRingClass();
  // Disable inputs if enabled
  if (settingsFlag) editTime();
  isRunning = !isRunning;
  start.innerText = start.innerText === "START" ? "PAUSE" : "START";
};

const setElementValue = (el, value) => {
  el.value = Intl.NumberFormat("en", {
    minimumIntegerDigits: 2,
  }).format(value);
};

setInterval(() => {
  // Do nothing if timer is not running
  if (!isRunning) return;

  let minutesValue = +minutes.value;
  let secondsValue = +seconds.value;

  secondsValue -= 1;

  if (secondsValue === 0 && minutesValue === 0) {
    // Stop timer if time = 0
    toggleRunningState();
    toggleRingClass();
  } else if (secondsValue < 0) {
    // When seconds = -1 -> set seconds to 59 and remove a minute
    secondsValue = 59;
    minutesValue -= 1;
  }

  setElementValue(minutes, minutesValue);
  setElementValue(seconds, secondsValue);
}, 1000);

settings.addEventListener("click", editTime);
start.addEventListener("click", toggleRunningState);
