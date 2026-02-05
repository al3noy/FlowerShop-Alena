document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLang = document.querySelector(".nav-lang");

    if (!hamburger || !navMenu || !navLang) return;

    function moveLang() {
        if (window.innerWidth <= 768) {
            navMenu.appendChild(navLang);
        } else {
            document.querySelector(".navbar-inner").appendChild(navLang);
        }
    }

    moveLang(); // ← OVO JE KLJUČNO ZA TELEFON
    window.addEventListener("resize", moveLang);

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
