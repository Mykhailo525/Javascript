// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні
// на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача

let form = document.forms.f1;

form.onsubmit=function (e) {
    e.preventDefault()
    let age = this.age.value;
    if (age >= 18) {
        alert('користувачу 18 або більше років')
    } else if (age >=1 && age <18) {
        alert('користувачу менше 18 років')
    } else {
        alert('Введіть будь ласка ваш вік')
    }
}

