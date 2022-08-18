// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname , email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let arr=[];
// arr.push(new User(1,'Mukhailo','Tryndiak','mtrindak@gmai.com',123))
// arr.push(new User(2,'ivan','fvfreve','qwe@gmai.com',243))
// arr.push(new User(15,'stepan','Tryndiak','rudak@gmai.com',57))
// arr.push(new User(4,'rty','fghiak','rakrty@gmai.com',57))
// arr.push(new User(5,'uio','Tkjyuiak','mtrindak@gmai.com',573))
// arr.push(new User(34,'asd','Tghjk','mtrindak@gmai.com',1573))
// arr.push(new User(7,'ghj','rtyhjdiak','mtrindak@gmai.com',5723))
// arr.push(new User(45,'kl;','rhrfhjak','rndak@gmai.com',5823))
// arr.push(new User(1000,'M,./','hrtrgukk','rrhindak@gmai.com',5823))
// arr.push(new User(78,'zxc','fhyndiak','rndak@gmai.com',155823))
// //
// //- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter=arr.filter(value => value.id%2===0);
// console.log(filter);
// //
// //- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort=arr.sort((a,b)=>a.id-b.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client{
//     constructor(id, name, surname , email, phone, order) {
//         this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
//     this.order=order;
//     }
// }
// let arr=[];
// arr.push(new Client(1,'Mukhailo','Tryndiak','mtrindak@gmai.com',123,['qwe','ert','tyu']))
// arr.push(new Client(2,'ivan','fvfreve','qwe@gmai.com',243,['tyr']))
// arr.push(new Client(15,'stepan','Tryndiak','rudak@gmai.com',57,['rty','yui']))
// arr.push(new Client(4,'rty','fghiak','rakrty@gmai.com',57,['hjk','nm,','npp']))
// arr.push(new Client(5,'uio','Tkjyuiak','mtrindak@gmai.com',573,['zxc','cvb','vnv','bnm']))
// arr.push(new Client(34,'asd','Tghjk','mtrindak@gmai.com',1573,['mbn']))
// arr.push(new Client(7,'ghj','rtyhjdiak','mtrindak@gmai.com',5723,['qwe','ert','yui']))
// arr.push(new Client(45,'kl;','rhrfhjak','rndak@gmai.com',5823,['nmz','asd','qwe','ryr']))
// arr.push(new Client(1000,'M,./','hrtrgukk','rrhindak@gmai.com',5823,['bmn']))
// arr.push(new Client(78,'zxc','fhyndiak','rndak@gmai.com',155823,['n,c','asd']))
// console.log(arr);
// //- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort=arr.sort((a,b)=>a.order.length-b.order.length);
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars(model,producer,year,maxSpeed,engineCapacity){
//     this.model=model;
//     this.producer=producer;
//     this.year=year;
//     this.maxSpeed=maxSpeed;
//     this.engineCapacity=engineCapacity;
//
//     this.drive=function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     this.info=function (){
//         console.log(`model- ${this.model},producer- ${this.producer},year- ${this.year},maxSpeed- ${this.maxSpeed},engineCapacity- ${this.engineCapacity}`)
//     }
//
//     this.increaseMaxSpeed=function (newSpeed){
//         this.maxSpeed=newSpeed;
//         console.log(`new max speed - ${this.maxSpeed}`)
//     }
//
//     this.changeYear=function (newValue){
//     this.year=newValue
//     console.log(`new year value - ${this.year}`)
//     }
//
//     this.addDriver=function (driver){
//     this.addDriver=driver;
//     console.log(`driver- ${driver.name}`)
//     }
// }
// const car=new Cars('tesla','mask',2017,200,2)
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(450);
// car.changeYear(2022);
// let driver={
//     name:'Mukhailo',
//     age:34,
//     status:true
// }
// car.addDriver(driver)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
//  рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Cars{
//     constructor(model,producer,year,maxSpeed,engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//     drive (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info (){
//         console.log(`model- ${this.model},producer- ${this.producer},year- ${this.year},maxSpeed- ${ this.maxSpeed},engineCapacity- ${this.engineCapacity}`)
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed=newSpeed;
//         console.log(`new max speed - ${this.maxSpeed}`)
//     }
//     changeYear (newValue){
//         this.year=newValue
//         console.log(`new year value - ${this.year}`)
//     }
//     addDriver(driver){
//         this.addDriver=driver;
//        console.log(`driver- ${driver.name}`)
//     }
//
// }
// let car=new Cars('toyota','someone',2010,240,4)
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(786);
// car.changeYear(3045);
// let driver={
//     name:'Andriy',
//     age:56,
//     status:false
// }
// car.addDriver(driver)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Popelushka(name,age,footSize){
    this.name=name;
    this.age=age;
    this.footSize=footSize;
}

let arr=[];
arr.push(new Popelushka('qwe',24,10))
arr.push(new Popelushka('rty',14,11))
arr.push(new Popelushka('uio',54,12))
arr.push(new Popelushka('opl',67,13))
arr.push(new Popelushka('asd',23,14))
arr.push(new Popelushka('fge',12,15))
arr.push(new Popelushka('zxc',78,16))
arr.push(new Popelushka('vbn',90,17))
arr.push(new Popelushka('bnm',22,18))
arr.push(new Popelushka('hjk',33,19))

console.log(arr);


class Prince{
    constructor(name,age,size) {
        this.name=name;
        this.age=age;
        this.size=size;
    }
}

let prince=new Prince('mukhailo',48,16)

function findPopelushka(array){
    for (const arrayElement of array) {
        if(arrayElement.footSize===prince.size){
            console.log(arrayElement)
        }
    }
}
findPopelushka(arr)

let findPopelushka2=function (object){
   if(object.footSize===prince.size){
       console.log(object)
   }
}
arr.find(findPopelushka2)

