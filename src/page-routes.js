const firstPageButton = document.getElementById("button-input-nome");
const nameInput = document.getElementById("input-nome");
const pagInicial = document.getElementById("tela-inicial");
const pagExposicao = document.getElementById("tela-exposicao");
const pagQuiz = document.getElementById("tela-quiz");
const formPagInicial = document.getElementById("form-pag-inicial");
const headerNomeUser = document.getElementById("header-nome-usuario");
const expoButtonToTicketPage = document.getElementById("button-pag-ticket");
const pagBilhetePrateado = document.getElementById("tela-bilhete-prateado");
const pagBilheteDourado = document.getElementById("tela-bilhete-dourado");
const buttonToQuizPage = document.getElementById("button-iniciar-quiz");
const sairButton = document.getElementById("sair-button");
const voltarButton = document.getElementById("voltar-button");
const logoButton = document.getElementById("logo-button");
const msgErro = document.createElement("p");

sairButton.addEventListener('click', () => {
    pagInicial.classList.remove('none');
    pagBilhetePrateado.classList.add('none');
    pagQuiz.classList.add('none');
    pagBilheteDourado.classList.add('none');
    sairButton.classList.add('none');
    voltarButton.classList.add('none');
    nameInput.value = "";
    msgErro.innerText = "";
});

logoButton.addEventListener('click', () => {
    pagInicial.classList.remove('none');
    pagBilhetePrateado.classList.add('none');
    pagQuiz.classList.add('none');
    pagExposicao.classList.add('none');
    pagBilheteDourado.classList.add('none');
    sairButton.classList.add('none');
    voltarButton.classList.add('none');
    nameInput.value = "";
    msgErro.innerText = "";
});

voltarButton.addEventListener('click', () => {
    if(!pagExposicao.classList.contains('none')) {
        pagExposicao.classList.add('none');
        pagInicial.classList.remove('none');
        voltarButton.classList.add("none");
        nameInput.value = "";
        msgErro.innerText = "";
    } else if(!pagBilhetePrateado.classList.contains('none')) {
        pagBilhetePrateado.classList.add('none');
        pagExposicao.classList.remove('none');
        sairButton.classList.add('none');
        msgErro.innerText = "";
    }
});

firstPageButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(nameInput.value !== ""){
        pagInicial.classList.add("none");
        pagExposicao.classList.remove("none");
        voltarButton.classList.remove("none");
        headerNomeUser.innerHTML = `<b>Olá, ${nameInput.value}!</b>`;
        msgErro.innerText = "";
    } else {
        msgErro.innerText = "Você deve fornecer o seu nome para continuar!";
        formPagInicial.appendChild(msgErro);
    }
});

expoButtonToTicketPage.addEventListener('click', () => {
    pagExposicao.classList.add("none");
    pagBilhetePrateado.classList.remove("none");
    sairButton.classList.remove("none");
    window.scrollTo(0,0);
});

buttonToQuizPage.addEventListener('click', () => {
    pagBilhetePrateado.classList.add("none");
    pagQuiz.classList.remove('none');
    voltarButton.classList.add('none');
    window.scrollTo(0,0);
});