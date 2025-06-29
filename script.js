//funcionamento do menu responsivo
const iconeMenu = document.querySelector('.icone-menu');
const mainNav = document.getElementById('main_nav');

iconeMenu.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    iconeMenu.classList.toggle('open');
});


