var init = function() {
    const frmRegistoEmpresa = document.getElementById('frmRegistoEmpresa');

    const empresaElements = frmRegistoEmpresa.elements;

    frmRegistoEmpresa.addEventListener("submit", function(evt) {
        const nome = empresaElements.nome.value;
        const descricao = empresaElements.descricao.value;
        const urlsite = empresaElements.urlsite.value;
        const email = empresaElements.email.value;
        const palavrapasse = empresaElements.palavrapasse.value;
        const urllogo = empresaElements.urllogo.value;

        if(nome === "") {
            alert("O nome é OBRIGATÓRIO!");
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

        if(urlsite === "") {
            alert("O URL do site é OBRIGATÓRIO!");
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

        if(urllogo === "") {
            alert("O URL do logo é OBRIGATÓRIO!");
            evt.preventDefault();
        }

        return true;
    });
}

window.addEventListener("DOMContentLoaded", init);