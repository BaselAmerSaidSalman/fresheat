const menuToggle = document.getElementById('mobile-menu');
const navBar = document.querySelector('.nav_bar');

menuToggle.addEventListener('click', (e) => {
    if (navBar.style.display === 'flex') {
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'flex';
    }
});

document.addEventListener('click', (e) => {
    if (!navBar.contains(e.target) && !menuToggle.contains(e.target)) {
        navBar.classList.remove('active');
    }
});