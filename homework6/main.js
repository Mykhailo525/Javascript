// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str ='hello world';
// console.log(str.length)
//
// let str1 ='lorem ipsum';
// console.log(str1.length)
//
// let str2 ='javascript is cool';
// console.log(str2.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str ='hello world';
// let loverCase=str.toUpperCase()
// console.log(loverCase)
//
// let str2 ='lorem ipsum';
// let loverCase2=str2.toUpperCase()
// console.log(loverCase2)
//
// let str3 ='javascript is cool';
// let loverCase3=str3.toUpperCase()
// console.log(loverCase3)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str ='HELLO WORLD';
// let loverCase=str.toLowerCase()
// console.log(loverCase)
//
// let str2 ='LOREM IPSUM';
// let loverCase2=str2.toLowerCase()
// console.log(loverCase2)
//
// let str3 ='JAVASCRIPT IS COOL';
// let loverCase3=str3.toLowerCase()
// console.log(loverCase3)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str=' dirty string   '
// let cleanStr=str.substring(1,13);
// console.log(cleanStr)
/////////////////////////////////////////////////////////////////////Сєрий такого не показував але хай буде
//  let str=' dirty string   '
//  let clear=str.trim();
// console.log(clear)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
////     let str = 'Ревуть воли як ясла повні';
//// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
////////////////
// let str = 'Ревуть воли як ясла повні';
// let stringToarray=(str)=> str.split(' ')
// console.log(stringToarray(str));
/////////////
// let string = 'Ревуть воли як ясла повні';
// function stringToarray(str){
//     let split=str.split(' ')
//     console.log(split)
// }
// stringToarray(string)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти
// в масиві на стрінгові.
// let arr=[10,8,-7,55,987,-1011,0,1050,0];
// let map=arr.map(value => value.toString())
// console.log(map)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// function sortNums(direction){
//    let sort= direction.sort((number1,number2)=>number2-number1);
//     console.log(sort)
//     let sort1= direction.sort((number1,number2)=>number1-number2);
//     console.log(sort1)
// }
// sortNums(nums)
/////////////////////////////////////
// let nums = [11,21,3];
// console.log(nums.sort((a,b)=>a-b))
// console.log(nums.sort((a,b)=>b-a))

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((value1,value2)=>value2.monthDuration-value1.monthDuration))
// console.log((coursesAndDurationArray.filter(value=>value.monthDuration>5)))


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 2, color:'black'},
    {cardSuit: 'clubs', value: 3, color:'black'},
    {cardSuit: 'clubs', value: 4, color:'black'},
    {cardSuit: 'clubs', value: 5, color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 2, color:'red'},
    {cardSuit: 'diamonds', value: 3, color:'red'},
    {cardSuit: 'diamonds', value: 4, color:'red'},
    {cardSuit: 'diamonds', value: 5, color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 2, color:'red'},
    {cardSuit: 'hearts', value: 3, color:'red'},
    {cardSuit: 'hearts', value: 4, color:'red'},
    {cardSuit: 'hearts', value: 5, color:'red'},
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 2, color:'black'},
    {cardSuit: 'spades', value: 3, color:'black'},
    {cardSuit: 'spades', value: 4, color:'black'},
    {cardSuit: 'spades', value: 5, color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {value: 'Joker', color:'black'},
];
// - знайти піковий туз
// let filter=cards.filter(function (card){
//     return card.cardSuit==='spades' && card.value==='Ace'
// })
// console.log(filter)

// - всі шістки
// let filter=cards.filter(function (card){
//     return card.value===6
// })
// console.log(filter)

// - всі червоні карти
// let filter=cards.filter(function (card){
//     return card.color==='red'
// })
// console.log(filter)

// - всі буби
// let filter=cards.filter(function (card){
//     return card.cardSuit==='diamonds'
// })
// console.log(filter)

// - всі трефи від 9 та більше
// let filter=cards.filter(function (card){
//     return card.cardSuit==='clubs' && (card.value>=9 || typeof card.value==="string")
// })
// console.log(filter)



// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let reduce=cards.reduce(function (accumulator,card){
//     if (card.cardSuit === 'spades') {
//         accumulator.spades.push(card)
//     }
//     if (card.cardSuit === 'diamonds') {
//         accumulator.diamonds.push(card)
//     }
//     if (card.cardSuit === 'hearts') {
//         accumulator.hearts.push(card)
//     }
//     if (card.cardSuit === 'clubs') {
//         accumulator.clubs.push(card)
//     }
//     return accumulator
// },{spades:[],diamonds:[],hearts:[],clubs:[]})
// console.log(reduce)
