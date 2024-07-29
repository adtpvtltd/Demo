
//header
const accountBtn = document.getElementById('accountBtn');
const accountIcon = document.getElementById('accountIcon');
const accountMenu = document.getElementById('accountMenu');

function toggleMenu() {
    accountMenu.style.display = accountMenu.style.display === 'block' ? 'none' : 'block';
}

accountBtn.addEventListener('click', toggleMenu);
accountIcon.addEventListener('click', toggleMenu);

window.addEventListener('click', function(event) {
    if (!event.target.matches('#accountBtn') && !event.target.matches('#accountIcon')) {
        accountMenu.style.display = 'none';
    }
});
//header
