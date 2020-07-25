const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".main-menu nav");
const initialMenu = menu.innerHTML;

hamburger.addEventListener("click", function() {
    hamburger.classList.contains("is-active")
        ? closeMenu()
        : openMenu();
});

function openMenu() {
    hamburger.classList.add("is-active");
    menu.classList.add("mobile-menu");
    menu.innerHTML = `<div class='wrapper'>${initialMenu}</div>`;
}

function closeMenu() {
    hamburger.classList.remove("is-active");
    menu.classList.remove("mobile-menu");
    menu.innerHTML = initialMenu;
}