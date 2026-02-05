 // Hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            navMenu.classList.toggle("active");
        });
    }

    // Funkcija za pomeranje jezika u meni na mobilnom
    const navLang = document.querySelector(".nav-lang");
    const navbarInner = document.querySelector(".navbar-inner");
    
    function moveLangToMenu() {
        if (!navLang || !navMenu || !navbarInner) return;
        
        if (window.innerWidth <= 768) {
            // Na mobilnom - premesti u meni
            if (navLang.parentNode !== navMenu) {
                navMenu.appendChild(navLang);
            }
        } else {
            // Na desktopu - vrati nazad u navbar-inner
            if (navLang.parentNode !== navbarInner) {
                navbarInner.appendChild(navLang);
            }
        }
    }

    // Pozovi na početku i na resize
    moveLangToMenu();
    window.addEventListener("resize", moveLangToMenu);
});

