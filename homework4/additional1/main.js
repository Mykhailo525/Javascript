////////////// --створити масив з:
//////////////    - з 5 числових значень
////////////// - з 5 стічкових значень
////////////// - з 5 значень стрічкового, числового та булевого типу
////////////// - та вивести його в консоль
////////////// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
//////////////     Вивести в консоль

// let first =[1,2,3,4,5];
// console.log(first)
// let second =['one','two','three','four','five'];
// console.log(second)
// let third = ['one', 2, 3, false, true];
// console.log(third)

// let fourth=[];
// fourth[4]=true;
// fourth[10]=false;
// fourth[14]=123;
// fourth[21]='Hello';
// console.log(fourth)


////////////// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//let fifth=[2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
// let i=0;
// while (i<fifth.length){
//     console.log(fifth[i]);
//     i++
// }

//     2. перебрати його циклом for
// for(j=0;j<fifth.length;j++){
//     console.log(fifth[j]);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let m=0
// while (m<fifth.length){
// if(m % 2 ===0)
//     console.log(fifth[m])
//     m++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (z=0;z<fifth.length;z++){
//     if(z%2===0){
//         console.log(fifth[z])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let k=0
// while (k<fifth.length){
//     if(fifth[k] % 2===0){
//         console.log(fifth[k])
//     }
//     k++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for(f=0;f<fifth.length;f++) {
//     if (fifth[f] % 2 === 0) {
//         console.log(fifth[f])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for(f=0;f<fifth.length;f++) {
//     if (fifth[f] % 3 === 0) {
//         console.log("okten")
//     }
//     else{
//         console.log(fifth[f])
//     }
// }

// 8. вивести масив в зворотньому порядку.
//
// for(f=fifth.length-1;f>=0;f--) {
//         console.log(fifth[f])
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
// let i =fifth.length-1;
// while (i>=0){
//     console.log(fifth[i]);
//     i--
// }

//     2. перебрати його циклом for
// for(j=fifth.length-1;j>=0;j--){
//     console.log(fifth[j]);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let m=fifth.length-1
// while (m>=0){
// if(m % 2 ===0)
//     console.log(fifth[m])
//     m--
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (z=fifth.length-1;z>=0;z--){
//     if(z%2===0){
//         console.log(fifth[z])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let k=fifth.length-1
// while (k>=0){
//     if(fifth[k] % 2===0){
//         console.log(fifth[k])
//     }
//     k--
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for(f=fifth.length-1;f>=0;f--) {
//     if (fifth[f] % 2 === 0) {
//         console.log(fifth[f])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for(f=fifth.length-1;f>=0;f--) {
//     if (fifth[f] % 3 === 0) {
//         console.log("okten")
//     }
//     else{
//         console.log(fifth[f])
//     }
// }

/////////////////////////////////////////////////////////
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr=[2,13,15,6,20,1,45,36,10,-190];
// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr=['ab','cv','sd','fgfhj','yjk','tuyti','thr','hrt','rtjhum','iou'];
// i=0;
// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = ['one', 2, 3, false, true,'two','three',true,25,-120];
// j=0;
// while(j<arr.length){
//     console.log(arr[j])
//     j++
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = ['one', 2, false, 3, true,'two','three',false,25,false];
// for(i=0;i<arr.length;i++){
//     if(typeof arr[i]==="boolean"){
//         console.log(arr[i])
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = ['one', 2, false, 3, true,'two','three',false,25,false];
// i=0;
// while(i<arr.length){
//     if(typeof arr[i]==="number"){
//         console.log(arr[i])
//     }
//     i++;
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = ['one', 2, false, 3, true,'two','three',false,25,false];
//
// for(i=0;i<arr.length;i++){
//     if (typeof arr[i]==="string"){
//         console.log(arr[i])
//     }
// }

////////////////////////////////////////////////////////////

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//         Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//         Вивести в консоль всі його елементи в циклі.
// let arr=[];
// arr[4]=true;
// arr[10]=['drgergs',23478];
// arr[14]=123;
// arr[21]='World';
// arr[34]=true;
// arr[0]=false;
// arr[67]=456;
// arr[12]=false;
// arr[13]=789;
// arr[22]=['Hello',123];
//
// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(i=0;i<10;i++){
//     console.log(i)
//     document.write(`<div> ${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(i=0;i<100;i++){
//     console.log(i)
//     document.write(`<div> ${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(i=0;i<200;i += 2) {
//     console.log(i)
//     document.write(`<div> ${i}</div>`)
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(i=0;i<100;i++){
//     if (i%2===0) {
//         console.log(i)
//         document.write(`<div> ${i}</div>`)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(i=0;i<100;i++){
//     if (i%2 !==0) {
//         console.log(i)
//         document.write(`<div> ${i}</div>`)
//     }
// }

////////////////////////////////////////////////////////////

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

let books=[
    {
        name:'harry potter',
        pages:234,
        authors:['Rowling','Someone'],
        genre:['fairy tale','Fantasy','adventure']
    },
    {
        name:'7 habits',
        pages:456,
        authors:['Kovi'],
        genre:['Self-help']
    },
    {
        name:'big money',
        pages:123,
        authors:['Cherniak','Brothers Grimm'],
        genre:['New wave hard rock',' progressive rock']
    },
    {
        name:'scrum',
        pages:900,
        authors:['Someone','Brothers Klichko','Poroshenko'],
        genre:['Beginner Guide To Learn And Master Scrum Agile Framework']
    }
]
// -знайти наібльшу книжку.
// let max=books[0]
// for (const book of books) {
//     if(book.pages>max.pages){
//         max=book;
//     }
// }
// console.log(max)

// - знайти книжку/ки з найбільшою кількістю жанрів
// let max=books[0];
// for (const book of books) {
//     if(book.genre.length>max.genre.length){
//         max=book;
//     }
// }
// console.log(max)

//- знайти книжку/ки з найдовшою назвою
// let max=books[0]
// for (const book of books) {
//     if(book.name.length>=max.name.length){
//         max=book;
//     }
// }
// console.log(max)

// - знайти книжку/ки які писали 2 автори
// for (const book of books) {
//     if(book.authors.length===2){
//         console.log(book)
//     }
// }

// - знайти книжку/ки які писав 1 автор
// for (const book of books) {
//     if(book.authors.length===1){
//         console.log(book)
//     }
// }
