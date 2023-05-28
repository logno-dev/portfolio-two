const html = document.querySelector("html");
const themeMenu = document.getElementById("change-theme");
const flexWrap = document.querySelector(".flex-wrapper");

const copy = document.getElementById("copy")

copy.innerHTML = "&copy;Copyright Logan Bunch " + new Date().getFullYear();

window.addEventListener("load", function() {
  if (localStorage.theme) {
    changeTheme(localStorage.theme)
  }
})

function changeTheme(theme) {
  console.log("change theme to: " + theme)
  html.className = "";
  html.classList.add(theme)
  localStorage.setItem("theme", theme)
}

function toggleThemeMenu() {
  themeMenu.classList.toggle("expand");
  flexWrap.classList.toggle("show");
}


