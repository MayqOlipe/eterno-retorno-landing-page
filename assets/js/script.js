let email = window.document.getElementById('exampleFormControlInput1')
let mensagem = window.document.getElementById('exampleFormControlTextarea1')

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = ''
        emailOK = true
    }
}