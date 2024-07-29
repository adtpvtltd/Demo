//navbar
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.getElementById('hamburger');
const searchIcon = document.getElementById('searchIcon');
const searchModal = document.getElementById('searchModal');
const closeSearchModalBtn = document.getElementById('closeSearchModal');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
});

searchIcon.addEventListener('click', () => {
    searchModal.style.display = 'block';
});

closeSearchModalBtn.addEventListener('click', () => {
    searchModal.style.display = 'none';
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar') && !event.target.closest('.search-modal')) {
        navLinks.classList.remove('nav-open');
        searchModal.style.display = 'none';
    }
});
//navbar

