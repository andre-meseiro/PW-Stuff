/**
 * Classe ItemInformacaoOfertas
 */

/**
 * @class Guarda a informação num objeto
 * @constructs ItemInformacaoOfertas
 * @param {Object} elemento - Objeto com a informação
 * 
 * @property {string} nomeEmpresa - Nome da empresa
 * @property {string} descricao - Descrição da oferta
 * @property {string} areaOferta - Área onde se enquadra a oferta
 * @property {number} duracao - Duração da oferta em meses
 * @property {number} valorTotal - Valor total da oferta
 * @property {date} dataValidade - Data de validade da oferta
 * @property {string} contacto - Contacto da empresa
 */
 function ItemInformacao(elemento) {
    this.nomeEmpresa = elemento.companyName;
    this.descricao = elemento.description;
    this.areaOferta = elemento.offerArea;
    this.duracao = elemento.duration;
    this.valorTotal = elemento.totalValue;
    this.dataValidade = elemento.expirationDate;
    this.contacto = elemento.contact;
}

/**
 * Método genérico que devolve um elemento HTML com toda a informação
 * @param {string} tagTopo - etiqueta do topo da estrutura.
 * @param {string} tagCampo - etiqueta com a informação do campo.
 * @param {string} separador - separador para os items da lista.
 * @returns {HTMLElement} elemento HTML com a informação.
 */
 ItemInformacao.prototype.definirEstrutura = function (tagTopo, tagCampo, separador = null) {
     let tagTopoHtml = document.createElement(tagTopo);
     // Para não repetir código para cada campo
     let campos = [];

     if(separador !== null) {
        campos = [this.nomeEmpresa, separador, this.descricao, separador, this.areaOferta, separador, this.duracao, separador, this.valorTotal, separador, 
            this.dataValidade, separador, this.contacto];
     }
     else {
        campos = [this.nomeEmpresa, this.descricao, this.areaOferta, this.duracao, this.valorTotal, this.dataValidade, this.contacto];
     }

     campos.forEach(currentElement => {
         let tagCampoHtml = document.createElement(tagCampo);
         tagCampoHtml.textContent = currentElement;
         tagTopoHtml.appendChild(tagCampoHtml);
     });
     return tagTopoHtml;
};

/**
 * Devolve uma li HTML com toda a informação
 * @param {string} separador - separador para os items da lista.
 * @returns {HTMLElement} li HTML com a informação.
 */
 ItemInformacao.prototype.definirItemLista = function(separador) {
    return this.definirEstrutura("li", "span", separador);
};