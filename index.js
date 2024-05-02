// let btns=document.querySelectorAll('.button')

// let body=document.querySelector('body')

// let grey=document.querySelector('#grey')
// let white=document.querySelector('#white')
// let blue=document.querySelector('#blue')
// let yellow=document.querySelector('#yellow')

// grey.addEventListener('click',(e)=>{
//     body.style.backgroundColor= "grey"
// })
// white.addEventListener('click',()=>{
//     body.style.backgroundColor= "white"
// })
// blue.addEventListener('click',()=>{
//     body.style.backgroundColor= "blue"
// })
// yellow.addEventListener('click',()=>{
//     body.style.backgroundColor= "yellow"
// })


//  One more optimize methods


let buttons = document.querySelectorAll('.button')
let body = document.querySelector('body')

buttons.forEach((buton) => {
    console.log(buton);

    buton.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        } else if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id

        } else if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id

        } else if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }
    })
})