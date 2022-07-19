const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
        console.log("hello kitty")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

// remove menu mobile

const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}

navLink.forEach((n) => n.addEventListener("click", linkAction))
