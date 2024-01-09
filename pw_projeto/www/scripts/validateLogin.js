var init = function() {
    const frmLogin = document.getElementById('frmLogin');

    const loginElements = frmLogin.elements;

    frmLogin.addEventListener("submit", function(evt) {
        const email = loginElements.email.value;
        const palavrapasse = loginElements.palavrapasse.value;

        if(email === "") {
            alert("O email é OBRIGATÓRIO!");
            evt.preventDefault();
        }

        if(palavrapasse === "") {
            alert("A palavra passe é OBRIGATÓRIA!");
            evt.preventDefault();
        }

        return true;
    });
}

window.addEventListener("DOMContentLoaded", init);