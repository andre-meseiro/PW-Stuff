var init = function() {
    const frmRegistoPro = document.getElementById('frmRegistoPro');

    const proElements = frmRegistoPro.elements;

    frmRegistoPro.addEventListener("submit", function(evt) {
        const nome = proElements.nome.value;
        const datanasc = proElements.datanasc.value;
        const genero = proElements.genero.value;
        const descricao = proElements.descricao.value;
        const email = proElements.email.value;
        const palavrapasse = proElements.palavrapasse.value;
        const localidade = proElements.localidade.value;

        if(nome === "") {
            alert("O nome é OBRIGATÓRIO!");
            evt.preventDefault();
        }

        if(datanasc === "") {
            alert("A data de nascimento é OBRIGATÓRIA!");
            evt.preventDefault();
        }

        if(genero === "") {
            alert("O género é OBRIGATÓRIO!");
            evt.preventDefault();
        }

        if(descricao === "") {
            alert("A descrição é OBRIGATÓRIA!");
            evt.preventDefault();
        }

        if(descricao.length < 10) {
            alert("Por favor insira uma descrição ADEQUADA!");
            evt.preventDefault();
        }

        if(email === "") {
            alert("O email é OBRIGATÓRIO!");
            evt.preventDefault();
        }

        if(palavrapasse === "") {
            alert("A palavra passe é OBRIGATÓRIA!");
            evt.preventDefault();
        }

        if(localidade === "") {
            alert("A localidade é OBRIGATÓRIA!");
            evt.preventDefault();
        }
    });
}

window.addEventListener("DOMContentLoaded", init);