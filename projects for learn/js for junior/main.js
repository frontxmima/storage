
// let userName = 'John';

// userName = 'bill'

// userName = 'stan'
// console.log(userName);


// birthYear = 2000;
// console.log(birthYear)

// const earthUserName = "Джон";
// const lessionTopic = 'jopaaaaaa';

// const birthYear = 1990;

// let isMarried = false;


// let x = 10;
// let y = 15;

// let result = x + y; //25

// let nameUser = 'john ';
// let lastNameUser = 'Grinev'

// console.log(nameUser + lastNameUser)

// let userName = 'Jopa';
// let greeting = 'pprivet, ' + userName + '! how are you?'

// let userName = 'Jury'
// let greeting = `hi ${userName}, how are you?`
// console.log(greeting)

// let x = 5
// let y = 5

// if (x > y) {
//     console.log('ten bolshe 5')
// } else if (x === y) {
//     console.log('ravno')
// } else {
//     console.log('ne ravno')
// }

// const mark = 11;
// switch (mark) {
//     case 1:
//         console.log('вы плоъо поготовились пошел нах3й');
//         break;
//     case 2:
//         console.log('хуесос безмозглый');
//         break;
//     case 3:
//         console.log('пойдет');
//         break;
//     case 4:
//         console.log('почяти поячтим');
//         break;
//     case 5:
//         console.log('заебьа');
//         break;
//     default:
//     console.log('ты еблан? нормальнео пишщи сукааа))')

// }

/* [хуй жопа] */
// console.log(fruits);
// console.log(fruits[3]);


// const fruits = ['apple', 50, true, 200];
// console.log(fruits)

// console.log('start');

// // for ( let i = 11; i >= 10; i--) {
// //   console.log('i = ' + i);
// // };

// console.log('finish');


// const fruits = ['apple','pinbeaple','apple','daaplep','123']


// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// const fruits = ['apple','pinbeaple','apple','daaplep','123'];

// fruits.forEach(function  (item, index) {
//   console.log(`элемент = ${item} имеет индекс = ${index}`);
// });

// let greeting1 = `Привет Алексей! ккак дела?`
// console.log(greeting1);

// let greeting2 = `Привет ДЖон! ккак дела?`
// console.log(greeting2);

// let greeting3 = `Привет ОЛег! ккак дела?`
// console.log(greeting3);

// function greeting (name){
//   console.log(`hi ${name} how are you`);
// }

// greeting('john');
// greeting('petr');
// greeting('vova');


// // let answer = calculateSum(5, 10);
// // console.log(answer);

// let res = calculateSum(calculateSum(10, 20), calculateSum(30, 40));
// console.log(res);



// let calculateSum = function(x, y){
//   let result = x + y;
//   console.log(result);
//   return result;
// }

// calculateSum(10,15);

// objects
// const petrName = 'petr';
// const petrAge = '28';
// const petrSpeciality = 'web-designer';
// const petrCity = 'Moscow';


// const petr = {
//   name: 'Petr',
//   age: 28,
//   speciality: 'html coder',
//   city: 'Moscow'
// };

// console.log(petr);

// function sayHi(name, age, city, speciality){
//   console.log(`ПРивет меня зовут ${name} 
//   мне ${age} я из ${city} мроя 
//   работа ${speciality}`);

// };

// sayHi(petrName, petrAge, petrCity, petrSpeciality);
// console.log(petr.name);
// console.log(petr);

// sayHi(petr.name, petr.age, petr.city, petr.speciality);

// const petr = {
//   name: 'Petr',
//   age: 28,
//   city: 'Moscow',
//   spec: 'html coder',
//   sayHi: function() {
//     console.log(`ПРивет меня зовут ${this.name} мне ${this.age} я из ${this.city} мроя работа ${this.spec}`);
//   }
// };

// petr.sayHi();


// const Dima = {
//   nameDima: 'Dima',
//   ageDima: 18,
//   cityDima: 'Polysaevo',
//   specDima: 'javaScriptEnjoyer',
//   sayHiDima: function() {
//     console.log(
//       `privet menya zovyt ${this.nameDima} mne ${this.ageDima} ya jivy v gorode ${this.cityDima} moya rabota ${this.specDima}`
//     );
//   }
// }

// Dima.sayHiDima();

//конструктор
// function Person (name, age, spec, city) {
  // this.name = name;
  // this.age = age;
  // this.spec = spec;
  // this.city = city;
  // this.sayHi = function() {
  //   console.log(
  //     `privet menya zovyt ${name} mne ${this.age} ya jivy v gorode ${this.city} moya rabota ${this.spec}`
  //   )
//   }
// }

// const petr = new Person('Петр', 30 ,'web-designer' ,'Cамара');
// console.log(petr);
// petr.sayHi();

// class Person {
//   constructor(name, age, spec, city){
//     this.name = name;
//     this.age = age;
//     this.spec = spec;
//     this.city = city;
//   }
//   sayHi () {
//     console.log(`privet menya zovyt ${name} mne ${this.age} ya jivy v gorode ${this.city} moya rabota ${this.spec}`);
//   }
// }
// const petr = new Person('Петр', 30, 'web-designer', 'Cамара');

// console.log(petr);
// petr.sayHi();