// *** Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.

let form = document.forms.f1;

form.onsubmit=function (e) {
    e.preventDefault()
    let row=this.row.value;
    let block=this.block.value;
    let text=this.text.value;

    let elements=document.getElementsByClassName('wrap')
    let item=elements[0]


    if(row!==0 && block!==0){
        for(i=0;i<row;i++){
            let divAll=document.createElement('div')
            item.appendChild(divAll)
            divAll.classList.add('block')
            for (j=0;j<block;j++){
                let divArr=document.createElement('div')
                divArr.classList.add('wrapper')
                divAll.appendChild(divArr)
                divArr.innerText=`${text}`
            }
        }

    }

}

