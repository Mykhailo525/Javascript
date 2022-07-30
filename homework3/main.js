////////- Є змінна х, якій ви надаєте довільне числове значення.
////////Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
////////Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x= +prompt('First task');
console.log(x, typeof x)
if (x===0){
    console.log('True')
}else{
    console.log('False')
}

////////- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
////////який перевірить, до якої четверті години попадає число
////////(в першу, другу, третю или четверту частину години).

// let time=+prompt('Second task');
// console.log(time)
// if(time>=0 && time<=15){
//     console.log('First quarter')
// }else if(time>15 && time<=30){
//     console.log('Second quarter')
// }else if(time>30 && time<=45){
//     console.log('Third quarter')
// }else if(time>45 && time<=59){
//     console.log('Fourth quarter')
// }else{
//     console.log('Something wrong')
// }

////////- У змінній day дано якесь число від 1 до 31.
////////Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('Third task');
// console.log(day)
// if (day >= 1 && day <= 10) {
//     console.log('First decade')
// } else if (day >10 && day <= 20) {
//     console.log('Second decade')
// } else if (day >20 && day <= 31) {
//     console.log('Third decade')
// } else {
//     console.log('Something wrong')
// }

////////- Скласти розклад на тиждень за домопоги switch.
////////Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
////////(можна замість плану на день, назву дня англійською).

// let week =+prompt('What day of the week?')
// console.log(week)
// switch (week){
//     case 1:
//         console.log('Monday')
//         break;
//     case 2:
//         console.log('Tuesday')
//         break;
//     case 3:
//         console.log('Wednesday')
//         break;
//     case 4:
//         console.log('Thursday')
//         break;
//     case 5:
//         console.log('Friday')
//         break;
//     case 6:
//         console.log('Saturday')
//         break;
//     case 7:
//         console.log('Sunday')
//         break;
//     default:
//         console.log('Something wrong')
// }

////////- Користувач вводить або має два числа.
////////Потрібно знайти та вивести максимальне число з тих двох .
////////Також потрібно врахувати коли введені рівні числа.

// let first =+prompt('First value')
// let second =+prompt('Second value')
// console.log(first)
// console.log(second)
// console.log("solution:")
// if (first > second) {
//     console.log(first)
// }
// else if(first < second)
// {
//     console.log(second)
// }
// else if(first == second)
// {
//     console.log('values are equal')
// }
// else{
//     console.log('Something wrong')
// }

////////- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
////////за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//////// (хибноподыбне, тобто кастується до false)

// let x= null || "default";
// console.log(x)

// ДОДАТКОВЕ//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

/////////Розвязок

//let result = a + b < 4? 'Мало':'Багато';


////////- Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
////////кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив,
////////в якому  3 і більше елементи.
////////Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// console.log(friends.length);
// if(friends.length>3){
//     console.log("big array")
// }else if (friends.length === 3) {
//     console.log('values are equal')
// }else{
//     console.log('small array')
// }


//////// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
////////Знайти, яке з них є середнім (більше одного, але менше за інше).
////////Перевірити, чи знаходиться перше число між двома іншими.

// let one = +prompt();
// let two = +prompt();
// let three = +prompt();
//
// console.log(one,two,three)
//
// if ((one > three && one < two) || (one > two && one < three)) {
//     console.log(one + ' ' + 'is the average value' + ' ' + 'and the first value is between the other two')
// } else if ((two > one && two < three) || (two > three && two < one)) {
//     console.log(two + ' ' +'is the average value'+ ' ' + 'and the first value is NOT between the other two')
// } else if ((three > one && three < two) || (three > two && three < one)) {
//     console.log(three + ' ' +'is the average value'+ ' ' + 'and the first value is NOT between the other two')
// }else{
//     console.log('something wrong or some values are equal')
// }

////////- Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
////////напишіть це тернарним оператором

// let x =+prompt()
//
// let result = x>=-100 && x<0? 'the value is negative': x > 0 && x<=100? 'the value is positive':'value is 0'
// console.log(result)


////////- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
////////Перевірте роботу скрипта при test, що дорівнює true, false.
//////// Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = true;
// let answer= test===true? 'Вірно':'Неправильно';
// console.log(answer)

// let test = false;
// if(test===true){
//     console.log('Вірно')
// }else {
//     console.log('Неправильно')
// }

////////- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
////////Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let name =prompt('Яка «офіційна» назва JavaScript?');
// if (name ==='ECMAScript'){
//     console.log('Правильно!')
// }else{
//     console.log('Не знаєте? ECMAScript!')
// }


////////- У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
////////Користувач вводить номер квартири просто в змінні або через prompt('') .
////////Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let number = +prompt('apartment №');
// console.log(number)
// if (number >= 1 && number <= 20) {
//     console.log('Перший підїзд')
// } else if (number >=21 && number <= 48) {
//     console.log('Другий підїзд')
// } else if (number >=49 && number <= 90) {
//     console.log('Третій підїзд')
// } else {
//     console.log('Something wrong')
// }


////////- Ми маємо змінну number в яку користувач задає числове значення,
////////якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let g = 11;
// let result= g===10?'Вірно':'НЕВІРНО'
// console.log(result)

////////Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
////////Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
////////Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temperature=+prompt('Temperature?')
//
// if(temperature>=10 && temperature<=22){
//     console.log('ми йдемо ВЧИТИСЯ')
// }else if(temperature<10 || temperature>22){
//     console.log('сидимо вдома і вчимося ОНЛАЙН')
// }else{
//     console.log('something wrong')
// }


////////- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
////////І взалежності від введеногочисла нам дається приз. (Авто, Мото, Телефон, і т.д )
////////і якщо число не підходить тоді  вивести Повідомлення - що число не вірне

// let number=+prompt('Write number 1-5')
// switch (number){
//     case 1:
//         console.log('you win a car')
//         break;
//     case 2:
//         console.log('you did not win')
//         break;
//     case 3:
//         console.log('you win a phone')
//         break;
//     case 4:
//         console.log('you win a laptop')
//         break;
//     case 5:
//         console.log('you did not win')
//         break;
//     default:
//         console.log('число не вірне')
// }