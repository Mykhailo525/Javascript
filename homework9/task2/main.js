// Цикл в циклі
// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
//     в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let elements=document.getElementsByClassName('wrap')
let item=elements[0]

for (const element of coursesArray) {
    let div=document.createElement('div')
    div.classList.add('block')
    item.appendChild(div)

    let divFirst=document.createElement('div')
    divFirst.classList.add('title')
    div.appendChild(divFirst)
    let h3=document.createElement('h3')
    divFirst.appendChild(h3)
    h3.innerText=`${element.title}`

    let divSecond=document.createElement('div')
    divSecond.classList.add('monthAndHour')
    div.appendChild(divSecond)

    let divMonth=document.createElement('div')
    divMonth.classList.add('month')
    divSecond.appendChild(divMonth)
    divMonth.innerText=`${element.monthDuration}`

    let divHour=document.createElement('div')
    divHour.classList.add('hour')
    divSecond.appendChild(divHour)
    divHour.innerText=`${element.hourDuration}`



    let divThird=document.createElement('div')
    divThird.classList.add('modules')
    div.appendChild(divThird)
    let ul=document.createElement('ul')
    divThird.appendChild(ul)
    for (const divThirdElement of element.modules) {
     let li=document.createElement('li')
        li.innerText=`${divThirdElement}`
        ul.appendChild(li)
    }

}