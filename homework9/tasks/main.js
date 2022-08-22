// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//     let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let target=document.getElementsByTagName('body')[0]
// for (const item of coursesAndDurationArray) {
//     let div=document.createElement('div')
//     div.innerText=`${item.title} ${item.monthDuration}`
//     target.appendChild(div)
//
// }

// - Є масив
// За допомоги скріпта для кожного елементу масиву
// зробити <div class='item'> ,  в якому буде <h1 class='heading'>
//     з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// let target=document.getElementsByTagName('body')[0];
// for (const item of coursesAndDurationArray) {
//     let div=document.createElement('div')
//     div.classList.add('item')
//     target.appendChild(div)
//
//     let h1=document.createElement('h1')
//     h1.classList.add('heading')
//     h1.innerText=`${item.title}`
//     div.appendChild(h1)
//
//     let p=document.createElement('p')
//     p.classList.add('description')
//     p.innerText=`${item.monthDuration}`
//     div.appendChild(p)
// }

// - Створити довільний елемент з id = text.
//     Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//РОЗКОМЕНТІЙТЕ РЯДКИ 12-13 в index.html
//
// document.getElementById('hider').onclick = function() {
//     document.getElementById('text').hidden = true;
//}