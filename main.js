const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#tswsidecol');
const body = document.body;

navToggle.addEventListener('click', () => {
    // This class is for styling the hamburger icon (e.g., to an 'X')
    body.classList.toggle('nav-open');
    // This class is for showing/hiding the navigation menu
    nav.classList.toggle('nav-open');
});