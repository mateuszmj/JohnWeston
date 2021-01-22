const menuHamburgerBtn = document.querySelector('.nav-btn');
const menuHamburgerIcon = document.querySelector('.nav-btn__icon');
const menuRight = document.querySelector('.nav-menu');

const missionNavArrow = document.querySelector('.section2__mission__nav__arrow');
const missionNavLinks = document.querySelector('.section2__mission__nav__links');
const missionNavLinksAll = document.querySelectorAll('.section2__mission__nav__links__link');
const missionTextInnerAll = document.querySelectorAll('.section2__mission__text__inner');

function itemToggle(item) {
    item.classList.toggle('active');
}

menuHamburgerBtn.addEventListener('click', () => {
    itemToggle(menuHamburgerBtn);
    itemToggle(menuHamburgerIcon);
    itemToggle(menuRight);
});

missionNavArrow.addEventListener('click', () => {
    missionNavLinksAll.forEach(itemToggle);
    missionTextInnerAll.forEach(itemToggle);
});

missionNavLinks.addEventListener('click', () => {
    missionNavLinksAll.forEach(itemToggle);
    missionTextInnerAll.forEach(itemToggle);
});