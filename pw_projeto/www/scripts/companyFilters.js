window.onload = function (event) {
    let btnFiltrarLocalidade = document.getElementById("filterByLocality");
    let btnFiltrarIdade = document.getElementById("filterByAge");
    let reset = document.getElementById("reset");

    btnFiltrarLocalidade.addEventListener("click", function (evt) {
        var informacao = document.querySelector('ul');
        let localidade = prompt("Localidade");
        if (localidade) {
            let portefolios = [];
            while (informacao.firstChild) {
                if (informacao.firstChild.nodeType === Node.ELEMENT_NODE) {
                    portefolios.push(informacao.firstChild);
                }
                informacao.removeChild(informacao.firstChild);
            }
            const portefoliosFiltered = portefolios.filter((portefolio) => {
                return portefolio.firstChild.nextSibling.textContent.split("|")[3].includes(localidade);
            });
            for (let portefolio of portefoliosFiltered) {
                informacao.append(portefolio);
            }
        }
    });
    btnFiltrarIdade.addEventListener("click", function (event) {
        var informacao = document.querySelector('ul');
        let idade = prompt("Idade");
        if (idade) {
            let portefolios = [];
            while (informacao.firstChild) {
                if (informacao.firstChild.nodeType === Node.ELEMENT_NODE) {
                    portefolios.push(informacao.firstChild);
                }
                informacao.removeChild(informacao.firstChild);
            }
            const portefoliosFiltered = portefolios.filter((portefolio) => {
                let date = portefolio.firstChild.nextSibling.textContent.split("|")[2].split(":")[1];
                let birthDate = new Date(date.split("-")[1] + "-" + date.split("-")[0] + "-" + date.split("-")[2]);
                console.log()
                return (new Date(Date.now() - birthDate).getFullYear() - 1970) == idade;
            });
            for (let portefolio of portefoliosFiltered) {
                informacao.append(portefolio);
            }
        }
    });
    reset.addEventListener("click", function (event) {
        location.reload();
    });
}