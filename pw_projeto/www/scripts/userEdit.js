window.onload = function (event) {
    let btnEdit = document.getElementById("buttonEdit");
    btnEdit.addEventListener("click", function (event) {
        let informacao = document.querySelector('section');
        let date = document.getElementById("dateBirth").textContent.split(":")[1].trim();
        informacao.innerHTML = `
        <form id="frmEdit" name="frmEdit" action="../profissional/edit?_method=PUT" method="POST">
            <fieldset>
                <legend>Dados</legend>
                <label for="nome">Nome:</label>
                <input id="nome" name="nome" type="text" placeholder="Introduza o seu nome" value="${document.getElementById("name").textContent.split(":")[1].trim()}" />
                <br />
                <label for="datanasc">Data nascimento:</label>
                <input id="datanasc" name="datanasc" type="date" placeholder="Introduza a sua data de nascimento" value="${date.split("-")[2] + "-" + date.split("-")[1] + "-" + date.split("-")[0]}" />
                <br />
                <label>Género</label>
                <br />
                <label for="masculino">Masculino:</label>
                <input id="masculino" name="genero" type="radio" value="M" ${document.getElementById("gender").textContent.split(":")[1].trim() == "M" ? 'checked="checked"' : ""} />
                <label for="feminino">Feminino:</label>
                <input id="feminino" name="genero" type="radio" value="F" ${document.getElementById("gender").textContent.split(":")[1].trim() == "F" ? 'checked="checked"' : ""}/>
                <br />
                <label for="descricao">Descrição</label>
                <br />
                <textarea id="descricao" name="descricao" rows="5" cols="50"
                    placeholder="Introduza a sua descrição">${document.getElementById("description").textContent.split(":")[1].trim()}</textarea>
                <br />
                <label for="localidade">Localidade:</label>
                <input id="localidade" name="localidade" type="text" placeholder="Introduza a localidade onde vive" value="${document.getElementById("locality").textContent.split(":")[1].trim()}" />
                <br />
                <label>Quer ser visto por empresas?</label>
                <br />
                <select id="visto" name="visto">
                    <option value="sim" ${document.getElementById("visible").value == true ? "selected" : ""}>Sim</option>
                    <option value="nao" ${document.getElementById("visible").value == false ? "selected" : ""}>Não</option>
                </select>
                <br/>
                <br/>
                <input id="login" name="login" type="hidden" value="${location.href.split("?")[1].split("=")[1]}" />
                <input id="btnCancelar" name="btnCancelar" type="button" value="Cancelar" />
                <input id="btnSubmeter" name="btnSubmeter" type="submit" value="Confirmar" />
            </fieldset>
        </form>
                `;
        document.getElementById("btnCancelar").addEventListener("click", (evt) => location.reload());
        let form = document.getElementById("frmEdit");
        form.addEventListener("submit", function (evt) {
            const nome = form.elements.nome.value;
            const datanasc = form.elements.datanasc.value;
            const genero = form.elements.genero.value;
            const descricao = form.elements.descricao.value;
            const localidade = form.elements.localidade.value;

            if (nome === "") {
                alert("O nome é OBRIGATÓRIO!");
                evt.preventDefault();
            }

            if (datanasc === "") {
                alert("A data de nascimento é OBRIGATÓRIA!");
                evt.preventDefault();
            }

            if (genero === "") {
                alert("O género é OBRIGATÓRIO!");
                evt.preventDefault();
            }

            if (descricao === "") {
                alert("A descrição é OBRIGATÓRIA!");
                evt.preventDefault();
            }

            if (descricao.length < 10) {
                alert("Por favor insira uma descrição ADEQUADA!");
                evt.preventDefault();
            }

            if (localidade === "") {
                alert("A localidade é OBRIGATÓRIA!");
                evt.preventDefault();
            }
        });
    });
    let btnEditEducation = document.getElementById("buttonEditEducation");
    btnEditEducation.addEventListener("click", (evt) => {
        let informacao = document.querySelector('section');
        let education = document.getElementById("education");
        let educationArray = []
        while (education.firstChild) {
            if (education.firstChild.nodeType === Node.ELEMENT_NODE) {
                educationArray.push(education.firstChild);
            }
            education.removeChild(education.firstChild);
        }
        informacao.innerHTML = `
        <ul id="portefolioInfo">
        <li class="li-title">Formações:</li>
        </ul>
        <span id="buttons">
            <input class="buttonsEdit" id="buttonBack" type="button" name="buttonBack" value="Voltar">
            <input class="buttonsEdit" id="buttonAddEducation" type="button" name="buttonAddWorkplace" value="Adicionar Formação">
        </span>
        `
        for (edu of educationArray) {
            let info = document.getElementById("portefolioInfo")
            info.append(edu);
        }
        document.getElementById("buttonBack").addEventListener("click", (evt) => location.reload());
        document.getElementById("buttonAddEducation").addEventListener("click", (evt) => {
            let informacao = document.querySelector('section');
            informacao.innerHTML = `
            <form id="frmAddWorkplace" name="frmAddWorkplace" action="../profissional/addedu" method="POST">
                <fieldset>
                    <legend>Criar Registo de Formação</legend>
                    <label for="name">Nome da formação:</label>
                    <input id="name" name="name" type="text" placeholder="Introduza nome da formção"/>
                    <br/>
                    <label for="nameplace">Local de formação:</label>
                    <input id="nameplace" name="nameplace" type="text" placeholder="Introduza o local da formação"/>
                    <br/>
                    <label for="type">Tipo:</label>
                    <input id="type" name="type" type="text" placeholder="Introduza o tipo de formação"/>
                    <br/>
                    <label for="average">Média:</label>
                    <input id="average" name="average" type="number" step="0.01" min="0" max="20" value="0"/>
                    <br/>
                    <input id="login" name="login" type="hidden" value="${location.href.split("?")[1].split("=")[1]}" />
                    <input id="btnCancelar" name="btnCancelar" type="button" value="Cancelar" />
                    <input id="btnSubmeter" name="btnSubmeter" type="submit" value="Confirmar" />
                </fieldset>
            </form>`;
            let form = document.getElementById("frmAddWorkplace");
            form.addEventListener("submit", function (evt) {
                const name = form.elements.name.value;
                const nameplace = form.elements.nameplace.value;
                const type = form.elements.type.value;
                if (name === "") {
                    alert("O nome da formação é OBRIGATÓRIO!");
                    evt.preventDefault();
                }
                if (nameplace === "") {
                    alert("O nome do local de formação é OBRIGATÓRIO!");
                    evt.preventDefault();
                }

                if (type === "") {
                    alert("O tipo de formação é OBRIGATÓRIO!");
                    evt.preventDefault();
                }
            });

            document.getElementById("btnCancelar").addEventListener("click", (evt) => location.reload());
        });

    });
    document.getElementById("buttonEditWorkplace").addEventListener("click", (evt) => {
        let informacao = document.querySelector('section');
        let workplace = document.getElementById("workplace");
        let workplaceArray = []
        while (workplace.firstChild) {
            if (workplace.firstChild.nodeType === Node.ELEMENT_NODE) {
                workplaceArray.push(workplace.firstChild);
            }
            workplace.removeChild(workplace.firstChild);
        }
        informacao.innerHTML = `
        <ul id="portefolioInfo">
        <li class="li-title">Locais de Trabalho Anteriores:</li>
        </ul>
        <span id="buttons">
            <input class="buttonsEdit" id="buttonBack" type="button" name="buttonBack" value="Voltar">
            <input class="buttonsEdit" id="buttonAddWorkplace" type="button" name="buttonAddWorkplace" value="Adicionar Local de Trabalho">
        </span>
        `;
        document.getElementById("buttonBack").addEventListener("click", (evt) => location.reload());
        for (work of workplaceArray) {
            let info = document.getElementById("portefolioInfo")
            info.append(work);
        }
        document.getElementById("buttonAddWorkplace").addEventListener("click", (evt) => {
            informacao.innerHTML = `
        <form id="frmAddWorkplace" name="frmAddWorkPlace" action="../profissional/addwork" method="POST">
            <fieldset>
                <legend>Criar Registo de Emprego</legend>
                <br />
                <label for="company">Nome da Empresa:</label>
                <input id="company" name="company" type="text" placeholder="Introduza o nome da Empresa" />
                <br/>
                <label for="companyUrl">Url do logo:</label>
                <input id="companyUrl" name="companyUrl" type="url" placeholder="Introduza o url do logo da Empresa" />
                <br/>
                <label for="descricao">Descrição de funcões:</label>
                <br/>
                <textarea id="descricao" name="descricao" rows="5" cols="50"placeholder="Introduza a descrição das suas funções"></textarea>
                <br/>
                <label for="datestart">Data de ínicio:</label>
                <input id="datestart" name="datestart" type="date" placeholder="Introduza inicio"/>
                <br />
                <label for="dateend">Data de fim:</label>
                <input id="dateend" name="dateend" type="date" placeholder="Introduza fim"/>
                <br />
                <br/>
                <input id="login" name="login" type="hidden" value="${location.href.split("?")[1].split("=")[1]}" />
                <input id="btnCancelar" name="btnCancelar" type="button" value="Cancelar" />
                <input id="btnSubmeter" name="btnSubmeter" type="submit" value="Confirmar" />
            </fieldset>
        </form>`;
            let form = document.getElementById("frmAddWorkplace");
            form.addEventListener("submit", function (evt) {
                const company = form.elements.company.value;
                const companyUrl = form.elements.companyUrl.value;
                const descricao = form.elements.descricao.value;
                const datestart = form.elements.datestart.value;
                const dateend = form.elements.dateend.value;
                if (company === "") {
                    alert("O nome da empresa é OBRIGATÓRIO!");
                    evt.preventDefault();
                }

                if (companyUrl === "") {
                    alert("O url do logo é OBRIGATÓRIO!");
                    evt.preventDefault();
                }

                if (datestart === "") {
                    alert("A data de inicio é OBRIGATÓRIA!");
                    evt.preventDefault();
                }

                if (dateend === "") {
                    alert("A data de fim é OBRIGATÓRIA!");
                    evt.preventDefault();
                }

                if (descricao === "") {
                    alert("A descrição é OBRIGATÓRIA!");
                    evt.preventDefault();
                }

                if (descricao.length < 10) {
                    alert("Por favor insira uma descrição ADEQUADA!");
                    evt.preventDefault();
                }
            });

            document.getElementById("btnCancelar").addEventListener("click", (evt) => location.reload());
        });
    });
}