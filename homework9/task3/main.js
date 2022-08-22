// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.classList.add('wrap','collapse','alpha','beta');
let h2=document.createElement('h2');
h2.innerText='some text';
h2.style.color='red';
h2.style.background='black';
div.appendChild(h2);

document.body.appendChild(div);

let target =document.getElementsByClassName('wrap')[0]
target.appendChild(h2.cloneNode(true))
