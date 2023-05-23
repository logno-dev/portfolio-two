const html = document.querySelector("html");
const themeMenu = document.getElementById("change-theme");

window.addEventListener("load", function() {
  if (localStorage.theme) {
    changeTheme(localStorage.theme)
  }
})

function changeTheme(theme) {
  html.className = "";
  html.classList.add(theme)
  localStorage.setItem("theme", theme)
}

function toggleThemeMenu() {
  themeMenu.classList.toggle("expand");
}
