// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56


// a. заповнити його 50 парними числами за допомоги циклу.
//let arr=[];
// for(let i=0;i<100;i++){
//     if(i%2===0) {
//         arr.push(i)
//     }
// }
// console.log(arr)

// b. заповнити його 50 непарними числами за допомоги циклу.
//let arr=[];
// i=0;
// while (i<100){
//         if(i%2!==0) {
//         arr.push(i)
//     }
//         i++;
// }
// console.log(arr)

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr=[];
// for(i=0;i<20;i++){
//     arr.push(Math.round(Math.random()*10)) // Returns a random integer from 0 to 9:
// }
// console.log(arr)

//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//let arr=[];
// let m = 8;
// let n = 732;
// for(i=0;i<20;i++){
//     arr.push(Math.round(Math.random()*(m-n)+n))
// }
// console.log(arr)

// 2. Вивести за допомогою console.log кожен третій елемент
// let arr=[];
// let m = 8;
// let n = 732;
// for(i=0;i<20;i++){
//     arr.push(Math.round(Math.random()*(m-n)+n))
// }
// console.log(arr)
// for(j=0;j<arr.length;j+=3){
//     console.log(arr[j])
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//let arr=[];
// let m = 8;
// let n = 732;
// for(i=0;i<20;i++){
//     arr.push(Math.round(Math.random()*(m-n)+n))
// }
// console.log(arr)
// for(j=0;j<arr.length;j+=3){
//     if(arr[j] % 2 ===0) {
//         console.log(arr[j])
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//let arr=[];
// let m = 8;
// let n = 732;
// for(i=0;i<20;i++){
//     arr.push(Math.round(Math.random()*(m-n)+n))
// }
//
// let arr1=[]
//
// console.log(arr)
// for(j=0;j<arr.length;j+=3){
//     if(arr[j] % 2 ===0) {
//         arr1.push(arr[j])
//     }
// }
// console.log(arr1)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//let arr=[];
// let m = 8;
// let n = 732;
// for(i=0;i<20;i++){
//     arr.push(Math.round(Math.random()*(m-n)+n))
// }
// console.log(arr)
// for(j=0;j<arr.length;j++){
//     if((arr[j+1]) % 2===0){
//         console.log(arr[j])
//     }
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let array=[100,250,50,168,120,345,188]
//
// let abc=0;
//
// for(i=0;i<array.length;i++){
//     abc+=array[i]
// }
// console.log('Сумма значень = '+abc)
// console.log('Середній чек = ' + abc/array.length)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array=[]
// for(i=0;i<20;i++){
//     array.push(Math.round(Math.random()*20))
// }
// console.log(array)
//
// let array1=[]
// for(j=0;j<array.length;j++){
//     array1.push(array[j]*5)
// }
// console.log(array1)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
//     і якщо елемент є числом - додати його в інший масив.
// let array = ['one', 2, 3, false, true,'two','three',true,25,-120];
// let array1 = [];
// for(i=0;i<array.length;i++){
//     if( typeof array[i]==="number"){
//        array1.push(array[i])
//     }
// }
// console.log(array1)

// - Дано 2 масиви з рівною кількістю об'єктів.З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
///////////////////////////////////////////////1 варіант
// let array=[]
// for (const userWithId of usersWithId) {
//     for(let cityWithId of citiesWithId){
//         if(userWithId['id']===cityWithId['user_id']){
//             userWithId.address= cityWithId
//         }
//     }
// }
// array=usersWithId;
// console.log(array)


///////////////////////////////////////////////2 варіант
// let array=[]
// for(let user=0;user<usersWithId.length;user++){
//     for(let city=0;city<citiesWithId.length;city++) {
//         if(usersWithId[user].id===citiesWithId[city].user_id){
//             usersWithId[user].address = citiesWithId[city]
//             array[user]=usersWithId[user]
//         }
//     }
// }
// console.log(array)


//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let array=[ 1, 2, 3, 5, 7, 9, 56, 8, 67,10 ]
// for(i=0;i<array.length;i++){
//     if(array[i]%2===0){
//         console.log(array[i])
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
//     За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let array=[ 1, 2, 3, 5, 7, 9, 56, 8, 67,10 ];
// let array1=[]
// for(i=0;i<array.length;i++){
//     array1.push(array[i])
// }
// console.log('Заданий масив - '+ array)
// console.log('Скопійований масив - '+ array1)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let b=array[0];
// for (i=0;i<array.length;i++) {
//     if(array[i]!==array[0]){
//        b+=array[i]
//     }
// }
// console.log(b)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let b = array[0]
// let i=0;
// while(i<array.length){
//     if(array[i]!==array[0]){
//         b+=array[i]
//     }
//     i++;
// }
// console.log(b)

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let b = array[0]
// for (const elem of array) {
//     if(b!==elem){
//         b+=elem
//     }
// }
// console.log(b)