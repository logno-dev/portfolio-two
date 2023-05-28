const html = document.querySelector("html");
const themeMenu = document.getElementById("change-theme");
const flexWrap = document.querySelector(".flex-wrapper");

const intro = document.getElementById("intro-link")
const about = document.getElementById("about-link")
const exp = document.getElementById("exp-link")
const projects = document.getElementById("projects-link")

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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const intersecting = entry.isIntersecting
    if (intersecting) {
      console.log(entry)
      switch (entry.target.id) {
        case "intro":
          intro.classList.add("active")
          about.classList.remove("active")
          exp.classList.remove("active")
          projects.classList.remove("active")
          break;
        case "about":
          intro.classList.remove("active")
          about.classList.add("active")
          exp.classList.remove("active")
          projects.classList.remove("active")
          break;
        case "experience":
          intro.classList.remove("active")
          about.classList.remove("active")
          exp.classList.add("active")
          projects.classList.remove("active")
          break;
        case "projects":
          intro.classList.remove("active")
          about.classList.remove("active")
          exp.classList.remove("active")
          projects.classList.add("active")
          break;
        default:
          intro.classList.remove("active")
          about.classList.remove("active")
          exp.classList.remove("active")
          projects.classList.remove("active")

      }
    }
  })
}, {
  threshold: 0.75,
})


document.querySelectorAll("section").forEach(section => {
  observer.observe(section)
})
