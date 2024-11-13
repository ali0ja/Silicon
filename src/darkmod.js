const darkmodeSwitch = document.querySelector("#darkmode-switch");
const hasDarkmode = localStorage.getItem("darkmode");

if (hasDarkmode == null) {
  if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
}
darkmodeSwitch.addEventListener("change", () => {
  if (darkmodeSwitch.checked) {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});

function enableDarkmode() {
  darkmodeSwitch.checked = true;
  document.documentElement.classList.add("dark");
}
function disableDarkmode() {
  darkmodeSwitch.checked = false;
  document.documentElement.classList.remove("dark");
}
