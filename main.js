const MenuButton = document.querySelector('.menu');
const MenuBackground = document.querySelector('.menubg');
const Header = document.querySelector('.headercontainer');
const MoreLess = document.querySelector('.moreless');

MenuButton.addEventListener('click', () => {
    MenuButton.classList.toggle('active');

    if (MenuButton.classList.contains('active')) {
        MenuBackground.classList.add('active');
        MenuBackground.classList.remove('closed');
        Header.classList.add('active');
        MoreLess.textContent = '-';
    } else {
        MenuBackground.classList.remove('active');
        MenuBackground.classList.add('closed');
        Header.classList.remove('active');
        MoreLess.textContent = '+';
    }
});