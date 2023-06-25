const form = document.getElementById("formulario");


form.addEventListener('submit', function(e) {
    e.preventDefault()
    numeroComparar();
}) 

function numeroComparar() {

    const entrada = parseFloat(document.getElementById('n1').value);
    const saida = parseFloat(document.getElementById('n2').value);
    const mensagemError = "A quantidade de entrada tem que ser maior que a de saida!!";
    const mensagemSucess = "Sucesso Valores Declarados!"

    if (entrada < saida) {
        document.querySelector(".error-message").innerHTML = mensagemError
    } else {
        document.querySelector(".error-message").innerHTML = mensagemSucess
    }
};
