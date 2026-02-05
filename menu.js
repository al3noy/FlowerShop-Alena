const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const navLang = document.querySelector(".nav-lang");

function moveLangToMenu() {
    if (window.innerWidth <= 768) {
        navMenu.appendChild(navLang);
    } else {
        document.querySelector(".navbar-inner").appendChild(navLang);
    }
}

window.addEventListener("resize", moveLangToMenu);
moveLangToMenu();
