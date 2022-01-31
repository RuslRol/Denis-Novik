const $menu = document.querySelector(".js-mobile-nav");
const $cross = document.querySelector(".js-mobile-nav-close");
const $burger = document.querySelector(".js-burger");
const $links = [...document.querySelectorAll(".js-mobile-link")];

$burger.addEventListener("click", () => {
    document.documentElement.style.overflow = "hidden";
    $menu.removeAttribute("hidden");
});

$cross.addEventListener("click", () => {   
    document.documentElement.style.overflow = "";
    $menu.removeAttribute("hidden", "hidden");
});

$links.forEach(($link) => {
    $link.addEventListener("click", () => {
        document.documentElement.style.overflow = "";
        $menu.setAttribute("hidden", "hidden");
    });
});