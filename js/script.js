function validacao() {
    var usernome = String(window.document.getElementById("nome").value);
    var usersenha = String(window.document.getElementById("senha").value);
    var es = window.document.getElementById("escre");
    if (usernome == "") {
        es.innerHTML = "Preencha seu nome";
    } else if (usersenha == "") {
        es.innerHTML = "Preencah a sua senha";
    } else {
        es.innerHTML = "Login Concluido "
    }
}