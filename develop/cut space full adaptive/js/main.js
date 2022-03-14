const formForm = document.querySelector('.form');

const input = document.querySelector('.form__input');

input.addEventListener('focus', function(){
    formForm.classList.add('form--active');
})

input.addEventListener('blur', function(){
    formForm.classList.remove('form--active');
})