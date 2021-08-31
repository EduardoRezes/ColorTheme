const menuItems = document.querySelectorAll('.menu_item');

for (let index = 0; index < menuItems.length; index++) {
    menuItems[index].addEventListener('click', buttonClick);
}

function buttonClick() {
    if (!this.classList.contains('menu_item--active')) {
        document.body.style.backgroundColor = `#${this.getAttribute('data-background')}`;
    }
}