// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт
// котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let arr=['Main','Products','About us','Contacts'];

let target=document.getElementsByClassName('menu')[0]
for (const arrElement of arr) {
    let li=document.createElement('li')
    target.appendChild(li)
    li.innerText=`${arrElement}`
}