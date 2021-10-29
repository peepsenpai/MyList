// my work 
// let input = document.getElementById('Input'),
//     desc = document.getElementById('description');

// let addBtn = document.getElementById('addBtn');
// let note = []
// let count = document.getElementsByClassName('item').length
// addBtn.addEventListener('click', () => {

//     let inputvalue = input.value;
//     let descValue = desc.value;

//     let noteObj = {
//         title: inputvalue,
//         desc: descValue
//     }
//     note.push(noteObj)
//     // console.log(note);
//     let container = document.getElementById('updateValue')
//     let div = document.createElement('div');
//     div.setAttribute('style', 'margin: 20px');
//     div.innerHTML = `<div class="item" id="PerItem${count}">
//     <h4>${noteObj.title}</h4>
//     <p>${noteObj.desc}</p>
//     <button class="btn btn-danger" id="deleteBtn${count}" onClick="btnclick(this.parentNode)">Delete</button>
//     </div>`;
//      container.appendChild(div)
//      console.log(div);
//     localStorage.setItem('noteItem', JSON.stringify(note));
//     count++
// })

// function btnclick(e){
//     e.setAttribute('style', 'display: none;')
// }


// displaying data from local storage 
// let input = document.getElementById('Input'),
//     desc = document.getElementById('description');

// let addBtn = document.getElementById('addBtn');
// let note = []
// let count = document.getElementsByClassName('item').length
// addBtn.addEventListener('click', () => {

//     let inputvalue = input.value;
//     let descValue = desc.value;

//     let noteObj = {
//         title: inputvalue,
//         desc: descValue
//     }
//     note.push(noteObj)
//     localStorage.setItem('noteItem', JSON.stringify(note));
//     updateDisplay()
// })

// function updateDisplay(){
//     let container = document.getElementById('updateValue');
//     let strVal = localStorage.getItem('noteItem')
//     let ArrVal = JSON.parse(strVal);
//     newArr = ArrVal.slice(-1)[0];
//     newObj = newArr
//     console.log(newObj);

//     let div = document.createElement('div');
//     div.innerHTML = `<div class="item" id="PerItem${count}">
//     <h4>${newObj.title}</h4>
//      <p>${newObj.desc}</p>
//      <button class="btn btn-danger" id="deleteBtn${count}" onClick="btnclick(this.parentNode)">Delete</button>
//      </div>`;
//       container.appendChild(div)
// }



// final project 

let date = new Date().getUTCDate();
let year = new Date().getFullYear();
let monnths = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
 let m = new Date().getMonth();
let month = monnths.forEach((e,i)=>{
    if(m == i){
        m = e;
    }
})


let addBtn = document.getElementById('addBtn');
let input = document.getElementById('Input'),
    desc = document.getElementById('description');
updateDisplay()
addBtn.addEventListener('click', () => {
    let getItem = localStorage.getItem('notes')
    if (getItem == null) {
        noteArr = []
    }
    else {
        noteArr = JSON.parse(getItem)
    }

    let inputvalue = input.value;
    let descValue = desc.value;
    
    let notObj = {
        title: inputvalue,
        desc: descValue,
        date: date,
        year: year,
        m: m
    }
    
    noteArr.push(notObj);
    localStorage.setItem('notes', JSON.stringify(noteArr));

    updateDisplay()
})

function updateDisplay() {
    let getItem = localStorage.getItem('notes');
    let container = document.getElementById('updateValue');
    if (getItem == null || getItem == '[]') {
        let text = `nothing to show ; Add more note to display here`;
        container.innerHTML = text;
        return
    }
    let arrVal = JSON.parse(getItem)
    let html = ''
    Array.from(arrVal).forEach((e, i) => {
        html += `<div class="item" id="PerItem${i}">
        <h6><span>${e.m} </span><span>  ${e.date}th </span> <span> ${e.year}</span></h6>
                <h4>${e.title}</h4>
                <p>${e.desc}</p>
                <button class="btn btn-danger" id="${i}" onClick="btnclick(this.id)">Delete</button>
              </div>`;
            })
            container.innerHTML = html
}


function btnclick(index) {
    let getItem = localStorage.getItem('notes');
    let arrVal = JSON.parse(getItem);
    arrVal.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(arrVal));
    updateDisplay()
}