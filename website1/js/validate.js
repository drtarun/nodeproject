const login = document.querySelector('form')
const names = document.querySelector('#nm')
const city = document.querySelector('#citi')
const messageOne = document.querySelector('#message-1')
//const messageOne = document.querySelector('#message-1')
//const messageTwo = document.querySelector('#message-2')
login.addEventListener('submit', (e)=>{
   
    var user = names.value
    if(names.value==="")
    {
        e.preventDefault()
        messageOne.textContent = "please enter name"
    }


})