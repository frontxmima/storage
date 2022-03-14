const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper')
const menuIcon = document.querySelector('.menu-icon')
const sidebar = document.querySelector('.sidebar')

sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon--active')
    sidebar.classList.toggle('sidebar--modile-active')
};

const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelector('.hidden-cards');

btnShowMoreCards.addEventListener('click', function (){
    hiddenCards.classList.remove('hidden-cards')
})