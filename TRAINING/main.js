// Напишіть функцію, яка приймає рядок з одного або кількох слів і повертає той самий рядок,
//     але з усіма п’ятьма або більше літерами слів, перевернутими(так само, як назва цього Kata).
// Передані рядки складатимуться лише з літер і пробілів.
//     Пробіли будуть додані, лише якщо присутнє більше одного слова.
// Example   spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// function spinWords(sentence){
//     const sentenceArray = sentence.split(' ');
//     let result = '';
//     sentenceArray.map((str, i) => {
//         if (str.length >= 5){
//             sentenceArray[i] = str.split('').reverse().join('');
//         } else {
//             sentenceArray[i] = str;
//         }
//         result = sentenceArray.join(' ');
//     });
//     return result;
// }
//
// console.log(spinWords("Hey fellow warriors"));

// Ви, мабуть, знаєте систему «лайків» із Facebook та інших сторінок.
//     Люди можуть "лайкати" публікації в блогах, зображення чи інші елементи.
//     Ми хочемо створити текст, який має відображатися поруч із таким елементом.
//     Реалізуйте функцію, яка приймає масив, що містить імена людей, яким подобається предмет.
//     Він повинен повертати відображуваний текст, як показано в прикладах:
//     []                                -->  "no one likes this"
//         ["Peter"]                         -->  "Peter likes this"
//         ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//         ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//         ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// let arr =["Alex", "Jacob", "Mark", "Max"];
// function f(array){
//         if(array.length===0){
//             console.log("no one likes this")
//        }else if(array.length===1){
//            console.log(array[0]+' '+"likes this")
//         }
//         else if(array.length ===2){
//             console.log(array[0]+' and '+array[1]+" like this")
//         }else if(array.length ===3){
//             console.log(array[0]+','+array[1]+' and '+array[2]+" like this")
//         }else if(array.length >=4){
//             console.log(array[0]+','+array[1]+' and '+(array.length-2)+" others like this")
//         }
// }
// f(arr)
// function likes (names) {
//     if (names.length === 0) {
//         return 'no one likes this';
//     } else if (names.length === 1) {
//         return `${names[0]} likes this`;
//     } else if (names.length === 2) {
//         return `${names[0]} and ${names[1]} like this`;
//     } else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     } else if (names.length > 3) {
//         return `${names[0]}, ${names[1]} and ${names.length - 2} other like this`;
//     }

