const translations = {
    sr: {
        title1: "Cvećara Alena",
        menu1: "Početna",
        menu2: "Cvećara",
        menu3: "Pogrebna oprema",
        title2: "Dobrodošli u Cvećaru Alena",
        title3: "Pravimo cveće baš onako kako ga vi zamislite.",
        herotext: "Našim aranžmanima pravimo trenutke nezaboravnim. Bilo da slavite, čestitate ili se opraštate, pomoći ćemo vam da izaberete savršeno cveće.",
        herobtn: "Pogledaj ponudu",
        abouttit: "O nama",
        aboutp: "Cvećara Alena posluje od 2000. godine i već više od dve decenije sa ljubavlju i posvećenošću stvara cvetne kreacije za sve životne prilike.",
        team: "Naš tim",
        teamabout: "Vlasnica & floristkinja",
        teamp: "Sa više od 20 godina iskustva u cvećarstvu, Alena brine da svaki aranžman bude savršeno uklopljen uz priliku i emociju.",
        teamaboutj: "Floristkinja & dekorater",
        teampj: "Jana je zadužena za moderne cvetne dekoracije i aranžmane za posebne događaje.",
        title4: "Gde se nalazimo?",
        wherep: "Cvećara Alena se nalazi u centru Pivnica, 50 km od Novog Sada i 30 km od Bačke Palanke. Radno vreme: Pon–Pet 09–20h. Nedelja neradna."
    },

    sk: {
        title1: "Kvetinárstvo Alena",
        menu1: "Domov",
        menu2: "Kvetinárstvo",
        menu3: "Pohrebné vybavenie",
        title2: "Vitajte v kvetinárstve Alena",
        title3: "Vyrábame kvety presne podľa vašich predstáv.",
        herotext: "S našimi aranžmánmi vytvárame nezabudnuteľné chvíle.",
        herobtn: "Zobraziť ponuku",
        abouttit: "O nás",
        aboutp: "Kvetinárstvo Alena pôsobí od roku 2000 a vytvára kvetinové aranžmány pre všetky príležitosti.",
        team: "Náš tím",
        teamabout: "Majiteľka & kvetinárka",
        teamp: "Alena sa stará o to, aby bol každý aranžmán dokonale prispôsobený príležitosti.",
        teamaboutj: "Kvetinárka & dekoratérka",
        teampj: "Jana má na starosti moderné kvetinové dekorácie.",
        title4: "Kde sa nachádzame?",
        wherep: "Kvetinárstvo Alena sa nachádza v centre Pivnice. Pracovná doba: Po–Pi 09:00–20:00. Nedeľa zatvorené."
    }
};

// === FUNKCIONALNA LOGIKA ===
document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll("[data-i18n]");

    function setLanguage(lang) {
        if (!translations[lang]) return;

        elements.forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        localStorage.setItem("lang", lang);
    }

    // EVENT DELEGATION (radi i kad se zastavice premestaju)
    document.addEventListener("click", (e) => {
        const flag = e.target.closest(".lang-picker img");
        if (!flag) return;

        setLanguage(flag.dataset.lang);
    });

    // Ucitaj zapamceni jezik
    const savedLang = localStorage.getItem("lang") || "sr";
    setLanguage(savedLang);
});
