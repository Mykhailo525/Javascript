// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/////////перший спосіб
// function square(a,b){
//     let res=a*b;
// }
// console.log(square(10, 20));
/////////другий спосіб
// let square=(a,b) => a*b;
// console.log(square(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
/////////перший спосіб
// function square(radius){
//     let res=Math.PI*radius^2
//     return res;
// }
// console.log(square(5));
/////////другий спосіб
// let square=(radius) => Math.PI*radius^2;
// console.log(square(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/////////перший спосіб
// function square(h,r){
//     let res=Math.round(2*Math.PI*r*h);
//     return res;
// }
// console.log(square(2, 9));
/////////другий спосіб
// let square= (h,r)=>Math.round(2*Math.PI*r*h)
// console.log(square(10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = ['one', 2, 3, false, true,'two','three',true,25,-120];
// function elementsOfArray(array){
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// elementsOfArray(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let txt ='dfdgeruvireuhvirhesvgonrengvjuersnj'
// function paragraf(text){
// document.write(`<p>${text}</p>`)
// }
// paragraf(txt)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let txt ='dfdgeruvireuhvirsnj'
// function makeList(text){
//     document.write(`<ul>`)
//     for (i=0;i<3;i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// makeList(txt)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let txt ='dfdgeruvireuhvirsnj'
// function makeList(text,number){
//     document.write(`<ul>`)
//
//     for (i=0;i<number;i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// makeList(txt,6)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//////////////////////1var
// let arr = ['one', 2, 3, false, true,'two','three',true,25,-120];
// function makeList(array){
//     document.write(`<ul>`)
//     for(i=0;i<array.length;i++){
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// makeList(arr)
///////////////////2 var
// function makeList(...array){
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// makeList('one', 2, 3, false, true,'two','three',true,25,-120)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let products = [
//     {
//         id: 1,
//         name: 'Mukhailo',
//         age: 22
//     },
//     {
//         id: 2,
//         name: 'Ostap',
//         age: 30
//     },
//     {
//         id: 4,
//         name: 'Ivan',
//         age: 56
//     },
//     {
//         id: 3,
//         name: 'Artur',
//         age: 5
//     },
// ];
// function makeDocument(array){
//     for (i=0;i<array.length;i++){
//        document.write(`<div>id:${array[i].id} name:${array[i].name} age:${array[i].age}</div>`)
//     }
// }
// makeDocument(products)

// - створити функцію яка повертає найменьше число з масиву
// let arr=[ 10, 20, 3, 5, 1, 2, 56, 8, 67,10 ];
// let min=arr[0]
// function minNumber(array){
// for (let i = 0; i < array.length; i++) {
//     if (array[i] < min) {
//         min = array[i];
//     }
//  }
// return min
// }
// let x=minNumber(arr);
// console.log(x)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr =[1,2,10,12,15,7,30];
// let res = 0;
// function sumOfElements(array){
//     for(i=0;i<array.length;i++){
//         res+=array[i]
//     }
//     return res;
// }
//
// let x =sumOfElements(arr);
// console.log(x)
