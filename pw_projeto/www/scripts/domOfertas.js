/**
 * Função que substitui todos os elementos filhos de um elemento HTML por um novo elemento HTML (facilitador de DOM)
 * @param {string} id - id do elemento HTML para o qual se pretende substituir os filhos.
 * @param {HTMLElement} novoFilho - elemento HTML que será o novo filho.
 */
 function substituirFilhos(id, novoFilho) {
    let elemento = document.getElementById(id);
    while(elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
    elemento.appendChild(novoFilho);
};

// constante que guarda as áreas das ofertas
const areas = Object.freeze({
    PROGRAM: "Programação",
    BD: "Base de Dados",
    ADMIN: "Administrador de Sistemas"
});

// datas para os itens da lista
const d1 = new Date(2022, 12, 15);
const d2 = new Date(2022, 12, 22);
const d3 = new Date(2022, 12, 28);
const d4 = new Date(2023, 1, 16);
const d5 = new Date(2023, 1, 25);
const d6 = new Date(2023, 2, 13);
const d7 = new Date(2023, 2, 10);
const d8 = new Date(2023, 3, 27);
const d9 = new Date(2023, 3, 30);
const d10 = new Date(2023, 4, 22);
const d11 = new Date(2023, 4, 18);
const d12 = new Date(2023, 5, 10);
const d13 = new Date(2023, 5, 29);
const d14 = new Date(2023, 6, 26);
const d15 = new Date(2023, 6, 11);
const d16 = new Date(2023, 7, 12);
const d17 = new Date(2023, 7, 16);
const d18 = new Date(2023, 8, 24);
const d19 = new Date(2023, 8, 14);
const d20 = new Date(2023, 9, 17);

// array com a informação da lista
var data = 
[
{companyName: "Google", description: "Full Stack Developer", offerArea: areas.PROGRAM, duration: 12, totalValue: 18000, expirationDate: d1, contact: "googleoffers@gmail.com"},
{companyName: "Apple", description: "Gestor de Utilizadores", offerArea: areas.BD, duration: 24, totalValue: 48000, expirationDate: d2, contact: "appleoffers@outlook.com"},
{companyName: "Microsoft", description: "Administrador", offerArea: areas.ADMIN, duration: 12, totalValue: 20000, expirationDate: d3, contact: "microsoftoffers@outlook.com"},
{companyName: "Tesla", description: "Administrador", offerArea: areas.ADMIN, duration: 7, totalValue: 26000, expirationDate: d4, contact: "teslaoffers@gmail.com"},
{companyName: "Sony", description: "Gestor de Vendas", offerArea: areas.BD, duration: 4, totalValue: 11800, expirationDate: d5, contact: "sonyoffers@gmail.com"},
{companyName: "Google", description: "Administrador", offerArea: areas.ADMIN, duration: 10, totalValue: 24000, expirationDate: d6, contact: "googleoffers@gmail.com"},
{companyName: "Apple", description: "Backend Developer", offerArea: areas.PROGRAM, duration: 5, totalValue: 13200, expirationDate: d7, contact: "appleoffers@outlook.com"},
{companyName: "Microsoft", description: "Gestor de Produtos", offerArea: areas.BD, duration: 8, totalValue: 21000, expirationDate: d8, contact: "microsoftoffers@outlook.com"},
{companyName: "Tesla", description: "Frontend Developer", offerArea: areas.PROGRAM, duration: 14, totalValue: 33000, expirationDate: d9, contact: "teslaoffers@gmail.com"},
{companyName: "Sony", description: "Administrador", offerArea: areas.ADMIN, duration: 16, totalValue: 36500, expirationDate: d10, contact: "sonyoffers@gmail.com"},
{companyName: "Google", description: "Gestor de Promoções", offerArea: areas.BD, duration: 24, totalValue: 45000, expirationDate: d11, contact: "googleoffers@gmail.com"},
{companyName: "Apple", description: "Administrador", offerArea: areas.ADMIN, duration: 10, totalValue: 11400, expirationDate: d12, contact: "appleoffers@outlook.com"},
{companyName: "Microsoft", description: "Web Developer", offerArea: areas.PROGRAM, duration: 12, totalValue: 27900, expirationDate: d13, contact: "microsoftoffers@outlook.com"},
{companyName: "Tesla", description: "Gestor de Redes Sociais", offerArea: areas.BD, duration: 20, totalValue: 30000, expirationDate: d14, contact: "teslaoffers@gmail.com"},
{companyName: "Sony", description: "Software Developer", offerArea: areas.PROGRAM, duration: 22, totalValue: 37400, expirationDate: d15, contact: "sonyoffers@gmail.com"},
{companyName: "Google", description: "Gestor de Anúncios", offerArea: areas.BD, duration: 24, totalValue: 42000, expirationDate: d16, contact: "googleoffers@gmail.com"},
{companyName: "Apple", description: "Mobile Developer", offerArea: areas.PROGRAM, duration: 4, totalValue: 12000, expirationDate: d17, contact: "appleoffers@outlook.com"},
{companyName: "Microsoft", description: "Gestor de Projetos", offerArea: areas.BD, duration: 2, totalValue: 8000, expirationDate: d18, contact: "microsoftoffers@outlook.com"},
{companyName: "Tesla", description: "Backend Developer", offerArea: areas.PROGRAM, duration: 10, totalValue: 31000, expirationDate: d19, contact: "teslaoffers@gmail.com"},
{companyName: "Sony", description: "Gestor de Tarefas", offerArea: areas.BD, duration: 18, totalValue: 29600, expirationDate: d20, contact: "sonyoffers@gmail.com"},
];

/**
 * Função que será executada quando a página estiver toda carregada,
 * criando a variável global "dados" com um objeto InformacaoOfertas
 * @memberof window
 * @params {Event} event - objeto que representará o evento
 */
window.onload = function (event) {
    window.dados = new InformacaoOfertas("informacao", data);

    // Ordenações e filtragens (botões)
    var btnOrdenarValorAsc = document.getElementById('btnOrdenarValorAsc');
    var btnOrdenarValorDesc = document.getElementById('btnOrdenarValorDesc');
    var btnOrdenarDataAsc = document.getElementById('btnOrdenarDataAsc');
    var btnOrdenarDataDesc = document.getElementById('btnOrdenarDataDesc');
    var btnFiltrarDuracao = document.getElementById('btnFiltrarDuracao');
    var btnFiltrarArea = document.getElementById('btnFiltrarArea');
    var btnFiltrarAmbos = document.getElementById('btnFiltrarAmbos');

    btnOrdenarValorAsc.addEventListener("click", function(evt) {
        var informacao = document.querySelector('ul');
        let ofertas = [];

        while(informacao.firstChild) {
            if(informacao.firstChild.nodeType === Node.ELEMENT_NODE) {
                ofertas.push(informacao.firstChild.textContent);
            }
            informacao.removeChild(informacao.firstChild);
        }

        ofertas.sort((a, b) => a.split('|')[4] - b.split('|')[4]);

        for(let oferta of ofertas) {
            var li = document.createElement('li');
            var txtLi = document.createTextNode(oferta);
            li.appendChild(txtLi);
            informacao.appendChild(li);
        }
    });

    btnOrdenarValorDesc.addEventListener("click", function(evt) {
        var informacao = document.querySelector('ul');
        let ofertas = [];

        while(informacao.firstChild) {
            if(informacao.firstChild.nodeType === Node.ELEMENT_NODE) {
                ofertas.push(informacao.firstChild.textContent);
            }
            informacao.removeChild(informacao.firstChild);
        }

        ofertas.sort((a, b) => b.split('|')[4] - a.split('|')[4]);

        for(let oferta of ofertas) {
            var li = document.createElement('li');
            var txtLi = document.createTextNode(oferta);
            li.appendChild(txtLi);
            informacao.appendChild(li);
        }
    });
    
    btnOrdenarDataAsc.addEventListener("click", function(evt) {
        var informacao = document.querySelector('ul');
        let ofertas = [];

        while(informacao.firstChild) {
            if(informacao.firstChild.nodeType === Node.ELEMENT_NODE) {
                ofertas.push(informacao.firstChild.textContent);
            }
            informacao.removeChild(informacao.firstChild);
        }

        ofertas.sort(function(a, b){
            let data1 = new Date(a.split('|')[5]);
            let data2 = new Date(b.split('|')[5]);
            return data1 - data2;
        });

        for(let oferta of ofertas) {
            var li = document.createElement('li');
            var txtLi = document.createTextNode(oferta);
            li.appendChild(txtLi);
            informacao.appendChild(li);
        }
    });

    btnOrdenarDataDesc.addEventListener("click", function(evt) {
        var informacao = document.querySelector('ul');
        let ofertas = [];

        while(informacao.firstChild) {
            if(informacao.firstChild.nodeType === Node.ELEMENT_NODE) {
                ofertas.push(informacao.firstChild.textContent);
            }
            informacao.removeChild(informacao.firstChild);
        }

        ofertas.sort(function(a, b){
            let data1 = new Date(a.split('|')[5]);
            let data2 = new Date(b.split('|')[5]);
            return data2 - data1;
        });

        for(let oferta of ofertas) {
            var li = document.createElement('li');
            var txtLi = document.createTextNode(oferta);
            li.appendChild(txtLi);
            informacao.appendChild(li);
        }
    });

    btnFiltrarDuracao.addEventListener("click", function(evt) {
        var informacao = document.querySelector('ul');
        let duracao = prompt("Duração");
        if(duracao) {
            let ofertas = [];

            while(informacao.firstChild) {
                if(informacao.firstChild.nodeType === Node.ELEMENT_NODE) {
                    ofertas.push(informacao.firstChild.textContent);
                }
                informacao.removeChild(informacao.firstChild);
            }

            const ofertasFilter = ofertas.filter(oferta => {
                return oferta.split('|')[3].includes(duracao);
            });

            for(let oferta of ofertasFilter) {
                var li = document.createElement('li');
                var txtLi = document.createTextNode(oferta);
                li.appendChild(txtLi);
                informacao.appendChild(li);
            }
        }
    });

    btnFiltrarArea.addEventListener("click", function(evt) {
        var informacao = document.querySelector('ul');
        let area = prompt("Área");
        if(area) {
            let ofertas = [];

            while(informacao.firstChild) {
                if(informacao.firstChild.nodeType === Node.ELEMENT_NODE) {
                    ofertas.push(informacao.firstChild.textContent);
                }
                informacao.removeChild(informacao.firstChild);
            }

            const ofertasFilter = ofertas.filter(oferta => {
                return oferta.split('|')[2].includes(area);
            });

            for(let oferta of ofertasFilter) {
                var li = document.createElement('li');
                var txtLi = document.createTextNode(oferta);
                li.appendChild(txtLi);
                informacao.appendChild(li);
            }
        }
    });

    btnFiltrarAmbos.addEventListener("click", function(evt) {
        var informacao = document.querySelector('ul');
        let duracao = prompt("Duração");
        let area = prompt("Área");
        if(duracao && area) {
            let ofertas = [];

            while(informacao.firstChild) {
                if(informacao.firstChild.nodeType === Node.ELEMENT_NODE) {
                    ofertas.push(informacao.firstChild.textContent);
                }
                informacao.removeChild(informacao.firstChild);
            }

            const ofertasFilter = ofertas.filter(oferta => {
                return (oferta.split('|')[3].includes(duracao) && oferta.split('|')[2].includes(area));
            });

            for(let oferta of ofertasFilter) {
                var li = document.createElement('li');
                var txtLi = document.createTextNode(oferta);
                li.appendChild(txtLi);
                informacao.appendChild(li);
            }
        }
    });
}