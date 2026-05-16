let submit = document.getElementById("submit")

submit.addEventListener("click", function(event){
    event.preventDefault()

const nameReg = /^[a-zA-Z]+$/
const mailReg = /^[a-zA-Z0-9]+@gmail\.com$/
const passReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

let name = document.getElementById("name")
let mail = document.getElementById("mail")
let pass = document.getElementById("pass")

let validate = true 

if(nameReg.test(name.value) == false) {
    document.querySelector(".name-err").style.display = "inline"    
    validate = false
}
else{
    document.querySelector(".name-err").style.display = "none"
}

if(mailReg.test(mail.value) == false){
    document.querySelector(".mail-err").style.display = "inline"
    validate = false
}
else{
    document.querySelector(".mail-err").style.display = "none"
}

if(passReg.test(pass.value) == false){
    document.querySelector(".pass-err").style.display = "inline"
    validate = false
}
else{
    document.querySelector(".pass-err").style.display = "none"
}

if(validate == true){
    window.location.href = "https://surendersk1065.github.io/greenden-emc/"
}
})

