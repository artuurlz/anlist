// ANIMAÇÃO DE MOSTRAR O MENU AO CLICAR

const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('nav-show');
    });
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('nav-show');
    });
}

// ANIMAÇÃO SCROLLREVEAL

ScrollReveal().reveal('.home_img', { duration: 2000});
ScrollReveal().reveal('.home_data', { duration: 2500});