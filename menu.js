document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (!hamburger || !navMenu) {
        console.error("Hamburger ili nav-menu nije pronađen");
        return;
    }

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
