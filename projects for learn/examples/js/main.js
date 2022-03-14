// 1) ПЕРИМЕТР КВАДРАТА

// let width = prompt('vvedite chislo')
// let height = prompt('vvedite chislo')
// alert( (width * 2) + (height * 2) ) 


// 2)  ПЛОЩАДЬ RECTANGLE

// let width = prompt('vvedite chislo')
// let height = prompt('vvedite chislo')
// alert('площадь '+ width * height),
// alert( (+width + +height)* 2);

// 4)  

let text = document.querySelector('.textarea');
let result = document.querySelector('#result');
text.addEventListener('blur', function() {
result.innerHTML=WordNumber(text.value)
});
function WordNumber(str) {
return str.(" ").length;
} 






