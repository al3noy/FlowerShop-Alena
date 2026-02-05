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
        aboutp: "Cvećara Alena posluje od 2000. godine i već više od dve decenije sa ljubavlju i posvećenošću stvara cvetne kreacije za sve životne prilike. Naš cilj je da svaku vašu ideju pretočimo u jedinstven aranžman koji prenosi emociju i ostavlja snažan utisak. U našoj ponudi nalaze se buketi, kreativni cvetni aranžmani, moderni box paketi, kao i pažljivo osmišljeni pokloni za rođendane, godišnjice, proslave i druge posebne trenutke. Posebnu pažnju posvećujemo kvalitetu, svežini cveća i detaljima, jer verujemo da upravo oni čine razliku. Bilo da slavite, čestitate ili želite nekome da ulepšate dan, u Cvećari Alena možete računati na iskustvo, kreativnost i pouzdanost.",
        teamabout:"Vlasnica & floristkinja",
        teamp: "Sa više od 20 godina iskustva u cvećarstvu, Alena brine da svaki aranžman bude savršeno uklopljen uz priliku i emociju koju želite da prenesete.",
        teamaboutj:"Floristkinja & dekorater",
        teampj: "Jana je zadužena za moderne cvetne dekoracije i aranžmane za posebne događaje, sa posebnim osećajem za detalje i estetiku.",
        title4: "Gde se nalazimo?",
        wherep: "Cvećara Alena se nalazi u centru Pivnica, na svega 50 km od Novog Sada i 30 km od Bačke Palanke. Posetite nas da zajedno osmislimo savršen buket ili aranžman za svaku priliku, ili nas kontaktirajte kako bismo sve dogovorili unapred. Radno vreme: Ponedeljak–petak: 09–20h Nedelja: neradna",
        team:"Naš tim",
    },
    sk: {
        title1: "Kvetinárstvo Alena",
        menu1: "Domov",
        menu2: "Kvetinárstvo",
        menu3: "Pohrebné vybavenie",
        title2: "Vitajte v kvetinárstve Alena",
        title3: "Vyrábame kvety presne podľa vašich predstáv.",
        herotext: "S našimi aranžmánmi vytvárame nezabudnuteľné chvíle. Či už oslavujete, gratulujete alebo sa lúčite, pomôžeme vám vybrať tie správne kvety.",
        herobtn: "Zobraziť ponuku",
        abouttit: "O nás",
        aboutp: "Kvetinárstvo Alena pôsobí na trhu od roku 2000 a už viac ako dve desaťročia s láskou a oddanosťou vytvára kvetinové kreácie pre všetky príležitosti. Naším cieľom je premeniť každý váš nápad na jedinečný aranžmán, ktorý vyvolá emócie a zanechá silný dojem. Naša ponuka zahŕňa kytice, kreatívne kvetinové aranžmány, moderné krabicové balíčky, ako aj starostlivo navrhnuté darčeky k narodeninám, výročiam, oslavám a iným výnimočným chvíľam. Venujeme osobitnú pozornosť kvalite, čerstvosti kvetov a detailom, pretože veríme, že práve tie robia rozdiel. Či už oslavujete, blahoželáte alebo chcete niekomu spríjemniť deň, v Kvetinárstve  Alena sa môžete spoľahnúť na skúsenosti, kreativitu a spoľahlivosť.",
        teamabout: "Majiteľ a kvetinár",
        teamp: "S viac ako 20-ročnými skúsenosťami v kvetinárstve sa Alena postará o to, aby bol každý aranžmán dokonalý, v súlade s príležitosťou a emóciou, ktorú chcete vyjadriť.",
        teampj: "Jana má na starosti moderné kvetinové dekorácie a aranžmány pre špeciálne udalosti, so zmyslom pre detail a estetiku.",
        teamaboutj:"Kvetinár a dekoratér",
        title4: "Kde sa nachádzame?",
        wherep: "Cvećara Alena sa nachádza v centre Pivnice, len 50 km od Nového Sadu a 30 km od Báčskej Palanky. Navštívte nás a spoločne navrhnite perfektnú kyticu alebo aranžmán na akúkoľvek príležitosť, alebo nás kontaktujte a dohodnite si všetko vopred. Pracovná doba: Pondelok - Piatok: 09:00 - 20:00 Nedeľa: zatvorené",
        team: "Náš tím",
    }
};

const elements = document.querySelectorAll("[data-i18n]");
const flags = document.querySelectorAll(".lang-picker img");

function setLanguage(lang) { elements.forEach(el => { const key = el.dataset.i18n; el.textContent = translations[lang][key]; }); localStorage.setItem("lang", lang); }

const lang = 'sr'; // ili 'en'

flags.forEach(flag => {
    flag.addEventListener("click", () => {
        setLanguage(flag.dataset.lang);
    });
});

// zapamti jezik
const savedLang = localStorage.getItem("lang") || "sr";
setLanguage(savedLang);

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



