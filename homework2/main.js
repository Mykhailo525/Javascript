//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [false, 22, true, 'phone', 'glasess', 'TV', 'Fridge', 'mouse', 'water', 'sweets'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let rowling = {
    title: 'Harry Potter',
    pageCount: 200,
    genre: ' fantasy'
}
console.log(rowling);

let covey = {
    title: 'The 7 Habits of Highly Effective People',
    pageCount: 381,
    genre: 'Self-help'
}
console.log(covey);

let kiyosaki = {
    title: 'Rich Dad Poor Dad',
    pageCount: 409,
    genre: 'Personal finance'
}
console.log(kiyosaki);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

let first = {
    title: 'I Feel Bad About My Neck',
    pageCount: 322,
    genre: 'Self-help',
    author:[
    {
    name:'NoraEphron',
     age:40
    }
]
}
console.log(first);

let second = {
    title: 'Broken Glass',
    pageCount: 109,
    genre: 'Personal finance',
    author:[
        {
            name:'regerger',
            age:40
        }
    ]
}
console.log(second);

let third = {
    title: 'Darkmans',
    pageCount: 443,
    genre: 'Personal finance',
    author:[
        {
            name:'erhgreg',
            age:45
        }
    ]
}
console.log(third);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name:'mukhailo' ,username:'tryndiak', password:'Mukhailo11@'},
    {name:'stas' ,username:'filonov', password:'Stas22@'},
    {name:'tania' ,username:'soroka', password:'Tania33@'},
    {name:'oksana' ,username:'shyika', password:'Oksana44@'},
    {name:'hrystyna' ,username:'tryndiak', password:'Hrystyna55@'},
    {name:'andriy' ,username:'tryndiak', password:'Andriy66@'},
    {name:'artur' ,username:'ubohii', password:'Artur77@'},
    {name:'oleh' ,username:'kubrak', password:'oleh88@'},
    {name:'ilona' ,username:'kravchuk', password:'Ilona99@'},
    {name:'vira' ,username:'tryndiak', password:'Vira10@'}
]

console.log(users[0]['password'])
console.log(users[1]['password'])
console.log(users[2]['password'])
console.log(users[3]['password'])
console.log(users[4]['password'])
console.log(users[5]['password'])
console.log(users[6]['password'])
console.log(users[7]['password'])
console.log(users[8]['password'])
console.log(users[9]['password'])
