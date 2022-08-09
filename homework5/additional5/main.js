// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minElement =(...array)=>{
//     let min=array[0]
//     for (const arrelemnt of array) {
//         if(arrelemnt<min){
//             min=arrelemnt
//         }
//     }
//     return min;
// }
// console.log(minElement(23, 34, 2));



// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxElement = (...array)=>{
//     let max=array[0]
//     for (const arrelemnt of array) {
//         if(arrelemnt>max){
//             max=arrelemnt
//         }
//     }
//     return max;
// }
// console.log(maxElement(3, 34, 2));

// - створити функцію яка повертає найбільше число з масиву
// let maxElement=(array)=>{
//     let max=array[0];
//     for (const element of array) {
//         if(element>max){
//             max=element;
//         }
//     }
//     return max;
// }
// let arr =[3,2,10,12,35,7,30];
// console.log(maxElement(arr));

// - створити функцію яка повертає найменьше число з масиву
// let minElement=(array)=>{
//     let min=array[0];
//     for (const element of array) {
//         if(element<min){
//             min=element;
//         }
//     }
//     return min;
// }
// let arr =[3,2,10,12,15,7,30];
// console.log(minElement(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sumOfElements=(array)=>{
//     let sum =0;
//     for (const arrayElement of array) {
//         sum+=arrayElement
//     }
//     return sum;
// }
// let arr =[1,2,10,12,15,7,30];
// console.log(sumOfElements(arr));

// - Дано натуральное число n. Выведите все числа от 1 до n.
// function numbers(n){
//     for (let i=1;i<=n;i++){
//         console.log(i)
//     }
// }
// numbers(12)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.
// function numbers(a,b){
//     if(a<b){
//         for(let i=a;i<=b;i++){
//             console.log(i)
//         }
//     }else if(a>b){
//         for(let i=a;i>=b;i--){
//             console.log(i)
//         }
//     }
// }
// numbers(7,2)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// function elements(array,i) {
// let x=array[i];
//     array[i]= array[i+1]
//     array[i+1]=x
//     console.log(array)
// }
//
// elements([9,8,0,4], 2);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let arr=[1,0,6,0,3];
// let res=[];
// let index=0;
// let count=0;
// for(let i=0;i<arr.length;i++){
//     if (arr[i]===0){
//         count++
//     }else{
//         res[index++]=arr[i]
//     }
// }
// console.log(res)
//
// let zeroCount=res.length;
// for (let i=0;i<count;i++){
//     res[zeroCount++]=0
// }
// console.log(res)
