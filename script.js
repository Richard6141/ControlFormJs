
let form = document.querySelector('form')
let nom = document.querySelector('#name')
let prenom = document.querySelector('#firstname')
let password = document.querySelector('#password')
let passwordconfirme = document.querySelector('#passwordconfirme')
let sexe = document.querySelectorAll('input[name="sexe"]')
/**
 * Vérifie la validité des champs du formulaire.
 * @returns {boolean} true si tous les champs sont valides, sinon false.
 */
function checkFormFields(){
    let isValid = true

    // Vérification du champ nom
    let errorName = document.querySelector("#errorName")
    nom = nom.value.trim()
    if(nom.length <= 0){
        errorName.innerHTML = "Champ obligatoire"
        errorName.style.color = "red"
        isValid = false
    } else {
        errorName.innerHTML = ""
    }

    // Vérification du champ prénom
    let errorFirstname = document.querySelector("#errorFirstname")
    prenom = prenom.value.trim()
    if(prenom.length <= 0){
        errorFirstname.innerHTML = "Champ obligatoire"
        errorFirstname.style.color = "red"
        isValid = false
    } else {
        errorFirstname.innerHTML = ""
    }

    // Vérification du champ mot de passe
    let errorPassword = document.querySelector("#errorPassword")
    password = password.value
    if(password.length <= 0){
        errorPassword.innerHTML = "Champ obligatoire"
        errorPassword.style.color = "red"
        isValid = false
    } else {
        errorPassword.innerHTML = ""
    }

    // Vérification du champ de confirmation de mot de passe
    let errorPasswordconfirme = document.querySelector("#errorPasswordconfirme")
    passwordconfirme = passwordconfirme.value
    if(passwordconfirme.length <= 0){
        errorPasswordconfirme.innerHTML = "Champ obligatoire"
        errorPasswordconfirme.style.color = "red"
        isValid = false
    } else {
        errorPasswordconfirme.innerHTML = ""
    }

    // Vérification du champ de sélection du sexe
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
        isValid = false
    } else {
        errorSexe.innerHTML = ""
    }

    // Vérification de la correspondance des mots de passe
    // let errorPasswordconfirme = document.querySelector("#errorPasswordconfirme")
    if(password !== passwordconfirme){
        errorPasswordconfirme.innerHTML = "Mots de passe non identiques"
        errorPasswordconfirme.style.color = "red"
        isValid = false
    } else {
        errorPasswordconfirme.innerHTML = ""
    }

    return isValid
}

/**
 * Gestionnaire d'événement de soumission du formulaire.
 * @param {Event} e - L'événement de soumission du formulaire.
 */

form.addEventListener('submit', (e)=>{
    if(!checkFormFields()){
        e.preventDefault()
    } else {
        resetErrorMessages()
    }
})
