document.querySelector('.men').onmouseover = function (event) {
    showMenu('.submenu');
};
document.querySelector('.submenu.men').onmouseout = function (event) {
    closeMenu('.submenu');
};
function closeMenu(selector) {
    document.querySelector(selector).setAttribute('style', 'display: none');
};
function showMenu(selector) {
    document.querySelector(selector).setAttribute('style', 'display: block');
};
