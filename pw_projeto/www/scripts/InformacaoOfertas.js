/**
 * Classe InformacaoOfertas
 */
/**
 * @class Guarda toda a informação existente e permite criar o conteúdo da página
 * @constructs InformacaoOfertas
 * @param {string} id - id do elemento HTML onde irá ser colocada a informação.
 * @param {Object[]} dados - Lista com objetos que contêm os dados
 * 
 * @property {string} id - id do elemento HTML onde irá ser colocada a informação.
 * @property {ItemInformacao[]} informacao - Informação contida nos vários sub elementos do elemento principal.
 */

 function InformacaoOfertas(id, dados) {
    this.id = id;
    
    this.informacao = [];
    for(let info of dados) {
        this.informacao.push(new ItemInformacao(info));
    }
}

/**
 * Coloca a informação numa ul HTML "dentro" do elemento com id=this.id
 * @param {string} separador - texto separador de cada campo do ItemInformacao.
 */
 InformacaoOfertas.prototype.emLista = function(separador) {
     let lista = document.createElement('ul');
     this.informacao.forEach(currentElement => { 
         lista.appendChild(currentElement.definirItemLista(separador));
     });
     substituirFilhos(this.id, lista);
};