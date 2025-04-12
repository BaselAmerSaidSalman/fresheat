let navBarList = document.querySelector('.nav_bar_list_content');
let dropbtn = document.querySelector('.dropbtn');

navBarList.style.display = 'none';
dropbtn.addEventListener('click', function (event) {
    event.stopPropagation()
    if (navBarList.style.display === 'none') {
        navBarList.style.display = 'block';
    } else {
        navBarList.style.display = 'none';
    }
});
document.addEventListener('click', function (event) {
    if (!navBarList.contains(event.target) && !dropbtn.contains(event.target)) {
        navBarList.style.display = 'none';
    }
})
