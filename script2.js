let form = document.querySelector('form')
let nom = document.querySelector('#name')
let prenom = document.querySelector('#firstname')
let password = document.querySelector('#password')
let passwordconfirme = document.querySelector('#passwordconfirme')
let sexe = document.querySelectorAll('input[name="sexe"]')

function checkNameField(){
    let errorName = document.querySelector("#errorName")
    nom = nom.value.trim()
    if(nom.length <= 0){
        errorName.innerHTML = "Champ obligatoire"
        errorName.style.color = "red"
        return false
    }
    errorName.innerHTML = ""
    return true
}

function checkFirstnameField(){
    let errorFirstname = document.querySelector("#errorFirstname")
    prenom = prenom.value.trim()
    if(prenom.length <= 0){
        errorFirstname.innerHTML = "Champ obligatoire"
        errorFirstname.style.color = "red"
        return false
    }
    errorFirstname.innerHTML = ""
    return true
}

function checkSexeField(){
    let errorSexe = document.querySelector("#errorSexe")
    let sexeSelected = false

    for(let i = 0; i < sexe.length; i++){
        if(sexe[i].checked){
            sexeSelected = true
            break
        }
    }

    if(!sexeSelected){
        errorSexe.innerHTML = "Veuillez sélectionner un sexe"
        errorSexe.style.color = "red"
        return false
    }
    errorSexe.innerHTML = ""
    return true
}

function checkPasswordField(){
    let errorPassword = document.querySelector("#errorPassword")
    password = password.value
    if(password.length <= 0){
        errorPassword.innerHTML = "Champ obligatoire"
        errorPassword.style.color = "red"
        return false
    }
    errorPassword.innerHTML = ""
    return true
}

function checkPasswordConfirmeField(){
    let errorPasswordconfirme = document.querySelector("#errorPasswordconfirme")
    passwordconfirme = passwordconfirme.value
    if(passwordconfirme.length <= 0){
        errorPasswordconfirme.innerHTML = "Champ obligatoire"
        errorPasswordconfirme.style.color = "red"
        return false
    }
    errorPasswordconfirme.innerHTML = ""
    return true
}

function checkPasswordConfirmation(){
    let errorPasswordconfirme = document.querySelector("#errorPasswordconfirme")
    if(password.value !== passwordconfirme.value){
        errorPasswordconfirme.innerHTML = "Mots de passe non identiques"
        errorPasswordconfirme.style.color = "red"
        return false
    }
    errorPasswordconfirme.innerHTML = ""
    return true
}

form.addEventListener('submit', (e)=>{
    if(!checkNameField() || !checkFirstnameField() || !checkPasswordField() || !checkPasswordConfirmeField() || !checkSexeField() || !checkPasswordConfirmation()){
        e.preventDefault()
    }
})
