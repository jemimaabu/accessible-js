const toggleButton = document.getElementById("toggle-display");
const content = document.getElementById("content");

toggleButton.addEventListener("click", () => {
  if (toggleButton.innerText === "Show") {
    content.classList.remove("hidden")
    content.setAttribute("aria-hidden", "false");
    toggleButton.innerText = "Hide"
  } else {
    content.classList.add("hidden")
    content.setAttribute("aria-hidden", "true");
    toggleButton.innerText = "Show"
  }
})

const timer = document.getElementById("timer");
const timedContent = document.getElementById("timed-content");
const stopTimer = document.getElementById("stop-timer");

const updateTime = () => {
  let time = +timer.innerText;
  time = time - 1;
  timer.innerText = time;

  if (time === 0) {
    timedContent.classList.add("hidden");
    timedContent.setAttribute("aria-hidden", "true");
    timer.setAttribute("aria-live", "off")
    clearInterval(countdown)
    return;
  }
}

const countdown = setInterval(updateTime, 1000);

stopTimer.addEventListener("click", () => {
  clearInterval(countdown);
  timer.parentNode.style.display = "none"
  stopTimer.style.display = "none"
})

const modal = document.getElementById("modal");
const mainPage = document.getElementsByTagName("main")[0];
const lastFocus = document.activeElement;

function toggleModal(action) {
  console.log(modal)
  if (action === "show") {
    modal.classList.remove("hidden");
    modal.focus();
    mainPage.setAttribute("aria-hidden", "true");

  } else {
    modal.classList.add("hidden");
    mainPage.setAttribute("aria-hidden", "false");
    lastFocus && lastFocus.focus();
  }
}

const customButton = document.getElementById("custom-button");

const handleClick = () => {
  alert("clicked")
}

const handleKeyPress = (e) => {
  e = e || window.event;
  if (e.which === 13) alert("clicked")
}

customButton.addEventListener("click", handleClick)
customButton.addEventListener("keypress", handleKeyPress)