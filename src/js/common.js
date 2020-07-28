const hamburger = document.querySelector("header .hamburger");
const categoryHamburger = document.querySelector(".catalog .hamburger")
const menu = document.querySelector(".main-menu nav");
const categoryMenu = document.querySelector(".category-full-list")

hamburger.addEventListener("click", function() {
    hamburger.classList.contains("is-active")
        ? closeMenu(hamburger, menu)
        : openMenu(hamburger, menu);
});

categoryHamburger
    && categoryHamburger.addEventListener("click", function() {
        categoryHamburger.classList.contains("is-active")
            ? closeMenu(categoryHamburger, categoryMenu)
            : openMenu(categoryHamburger, categoryMenu);
    });

function openMenu(hamburger, currentMenu) {
    hamburger.classList.add("is-active");
    currentMenu.classList.add("mobile-menu");
    currentMenu.innerHTML = `<div class='wrapper'>${initialMenu(currentMenu)}</div>`;
}

function closeMenu(hamburger, currentMenu) {
    hamburger.classList.remove("is-active");
    currentMenu.classList.remove("mobile-menu");
    currentMenu.innerHTML = initialMenu(currentMenu);
}

function initialMenu(menu) {
    return menu.innerHTML
}