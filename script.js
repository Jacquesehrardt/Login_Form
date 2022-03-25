const email= document.getElementById("email")
const password= document.getElementById("password")
const iconMail = document.querySelectorAll(".iconMail")
const iconLock = document.querySelectorAll(".iconLock")

function focusMail(){
    iconMail.forEach(icon => {
        icon.classList.toggle('focus')
    })
}

email.addEventListener('focus', focusMail)
email.addEventListener('blur', focusMail)

function focusLock(){
    iconLock.forEach(icon => {
        icon.classList.toggle('focus')
    })
}

password.addEventListener('focus', focusLock)
password.addEventListener('blur', focusLock)
