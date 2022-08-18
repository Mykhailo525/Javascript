// - Напишите функцию cutString(str, n), которая делит строку на подстроки,
// состоящие из n символов.document.writeln(cutString('наслаждение',3)) [нас,лаж,ден,ие]
// function cutString(str, n) {
//     let res = [];
//     for(var i = 0 ; i < str.length; i += n) {
//         res.push(str.substr(i, n));
//     }
//     return res;
// }
// console.log(cutString('наслаждение',3))

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
//     що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// function delete_characters(str, length){
//     console.log(str.substring(str[0],length))
// }
// delete_characters(str, 7)

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//     При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
//
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let insert_dash=(str)=>{
//     return str.toUpperCase().replaceAll(' ','-')
// }
// let str = "HTML JavaScript PHP"
// console.log(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр
// першого символу рядка з нижнього регістру у верхній.
// let str = 'каждый охотник желает знать';
// let asd=(str)=>{
//     return str[0].toUpperCase()+str.substring(1,str.length)
// }
// console.log(asd(str));

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let str = '^%$%^#% Harry &^%^*    Potter'
// function norm(st){
//     let string=st.split('').map(value => (value>='A'&& value<='Z')||(value>='a'&& value<='z')?value:' '
//     ).join('').trim();
//     while(string.includes('  ')){
//         string=string.replace('  ',' ')
//     }
//     console.log(string)
// }
// norm(str)

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let arr=[];
// function asd(n,m){
// for(i=0;i<50;i++){
//     arr.push(Math.round(Math.random()*(m-n)+n))
// }
// return arr}
// console.log(asd(0, 100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     Відсортувати його за допомоги sort
// let arr=[];
// function asd(n,m){
// for(i=0;i<50;i++){
//     arr.push(Math.round(Math.random()*(m-n)+n))
// }
// let sort=arr.sort((a, b) => a-b)
//     return sort
// }
// console.log(asd(0, 100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
// let arr=[];
// function asd(n,m){
// for(i=0;i<50;i++){
//     arr.push(Math.round(Math.random()*(m-n)+n))
// }
//    let result= arr.filter(elem => elem % 2 === 0 && elem !== 0)
// return result
// }
// console.log(asd(0, 10));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//  let str = 'каждый oхотник желает знать';
//  function capitalize(str){
// console.log(
//     str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
// );
// }
// capitalize(str)

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
//     данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
//     функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// let split;
// let splitTwo;
// function emailCheck(email){
//  let include = email.includes('@')
//  if (include === true) {
//   split = email.split('@')
//   if (split.length > 2) {
//    console.log('неправильний email(не може бути 2 або більше знаки @)')
//    return false
//   }
//  } else {
//   console.log('пошта не містить знаку @')
//  }
//
//  let includeTwo=split[1].includes('.')
//  if(includeTwo===true){
//   splitTwo=split[1].split('.')
//     if(splitTwo.length>2){
//      console.log('Неправльно(2 або більше значень . після @)')
//      return false
//     }
//  }else {
//   console.log('пошта не містить знаку . після @')
//  }
//
// if(!split[0] || splitTwo[0].length<2 || !splitTwo[1]){
//  console.log('напрвильний email')
//  return false
// }else{
//  console.log('Все правильно')
// }
//
// }
//
// emailCheck('some.email@gmail.com');

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let count=0;
// let str ='Астрономия это наука о небесных объектах';
// function f(str,symbol) {
//     let split = str.split('')
//     for (const string of split) {
//         if (string === symbol) {
//             count++;
//         }
//     }
//     return count
// }
// console.log(f(str, 'о'));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let str = "Сила тяжести приложена к центру масс тела";
// const cutString=(str,n)=> {
//     let split = str.split(' ').splice(0, n).join(' ');
//     return split
// }
// console.log(cutString(str, 3));

// - є масив   відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// let sort =coursesArray.sort((a,b)=>b.modules.length-a.modules.length)
//  console.log(sort);







