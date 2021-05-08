// Página inicial do quiz.
document.getElementById('button-iniciar-quiz').addEventListener('click', function() {
	primeiraPergunta();
});

import getImageURLObrasEscolhidas from "./main.js"

//Página questão 1
function primeiraPergunta() {
	let divUm = document.getElementById('div1');
	divUm.innerHTML = `<p class='header-quiz'>Pergunta 1 de 4:</p>
	<div class='pergunta'>
		<p>Quem pintou a obra ‘Abaporu’?</p>
	</div>
	<img src="${getImageURLObrasEscolhidas("Abaporu")}" alt="Abaporu" class='obra-quiz-img'>
	<div class="btnsResposta">
		<button id='bt1' class='bt1' value="errado">Pedro Américo</button>
		<button id='bt2' class='bt2' value="errado">Beatriz Milhazes</button>
		<button id='bt3' class='bt3' value="correto">Tarsila do Amaral</button>
		<button id='bt4' class='bt4' value="errado">Candido Portinari</button>
	</div>
	<div class='buttons'>
		<p class='acertoOuErro none' id="acertoOuErro"></p>
		<button class="btn-tryagain none" id="btnAgain">Quer tentar novamente?</button>
		<button class="btn-nextquestion" id="proximaPergunta">Próxima Pergunta</button>
	</div>
	`;

	document.getElementById('proximaPergunta').disabled = true;
	carregarBotoes();

	document.getElementById('proximaPergunta').addEventListener('click', function() {
		divUm = document.getElementById('div1').innerHTML = '';
		segundaPergunta();
	});
}

//Página questão 2
function segundaPergunta() {
	let divDois = document.getElementById('div2');
	divDois.innerHTML = `<p class='header-quiz'>Pergunta 2 de 4:</p>
	<div class='pergunta'>
		<p>O Bumba meu Boi é uma tradicional festa de qual estado?</p>
	</div>
    <img src="${getImageURLObrasEscolhidas("Bumba meu Boi")}" alt="Bumba meu Boi" class='obra-quiz-img'>
    <div class="btnsResposta">
		<button id='bt1' class='bt1' value="errado">Rio Grande do Norte</button>
		<button id='bt2' class='bt2' value="correto">Maranhão</button>
		<button id='bt3' class='bt3' value="errado">Amazonas</button>
		<button id='bt4' class='bt4' value="errado">Bahia</button>
	</div>
    <div class='buttons'>
		<p class='acertoOuErro none' id="acertoOuErro"></p>
		<button class="btn-tryagain none" id="btnAgain">Quer tentar novamente?</button>
		<button class="btn-nextquestion" id="proximaPergunta">Próxima Pergunta</button>
	</div>
	`;

	document.getElementById('proximaPergunta').disabled = true;
	carregarBotoes();

	document.getElementById('proximaPergunta').addEventListener('click', function() {
		divDois = document.getElementById('div2').innerHTML = '';
		terceiraPergunta();
	});
}

//Página questão 3
function terceiraPergunta() {
	let divTres = document.getElementById('div3');
	divTres.innerHTML = `<p class='header-quiz'>Pergunta 3 de 4:</p>
	<div class='pergunta'>
		<p>Qual artista plástico é conhecido por pintar bandeirinhas?</p>
	</div>
	<img src="${getImageURLObrasEscolhidas("Grande fachada festiva")}" alt="Grande Fachada Festiva" class='obra-quiz-img'>
	<div class="btnsResposta">
		<button id='bt1' class='bt1' value="errado">Aldemir Martins</button>
		<button id='bt2' class='bt2' value="correto">Alfredo Volpi</button>
		<button id='bt3' class='bt3' value="errado">Lasar Segall</button>
		<button id='bt4' class='bt4' value="errado">Candido Portinari</button>
	</div>
	<div class='buttons'>
		<p class='acertoOuErro none' id="acertoOuErro"></p>
		<button class="btn-tryagain none" id="btnAgain">Quer tentar novamente?</button>
		<button class="btn-nextquestion" id="proximaPergunta">Próxima Pergunta</button>
	</div>
	`;

	document.getElementById('proximaPergunta').disabled = true;
	carregarBotoes();

	document.getElementById('proximaPergunta').addEventListener('click', function() {
		divTres = document.getElementById('div3').innerHTML = '';
		quartaPergunta();
	});
}

//Página questão 4
function quartaPergunta() {
	let divQuatro = document.getElementById('div4');
	divQuatro.innerHTML = `<p class='header-quiz'>Pergunta 4 de 4:</p>
	<div class='pergunta'>
		<p>Nas margens de qual rio,<br> Dom Pedro I declarou a independência?</p>
	</div>
	<img src="${getImageURLObrasEscolhidas("Independence or Death! (The Ipiranga Shout)")}" alt="Independência ou Morte!" class='obra-quiz-img'>
	<div class="btnsResposta">
		<button id='bt1' class='bt1' value="correto">Rio Ipiranga</button>
		<button id='bt2' class='bt2' value="errado">Rio Tietê</button>
		<button id='bt3' class='bt3' value="errado">Rio Grande do Sul</button>
		<button id='bt4' class='bt4' value="errado">Rio Pinheiros</button>
	</div>
    <div class='buttons'>
		<p class='acertoOuErro none' id="acertoOuErro"></p>
		<button class="btn-tryagain none" id="btnAgain">Quer tentar novamente?</button>
		<button class="btn-nextquestion btn-lastquestion" id="proximaPergunta">Finalizar quiz!</button>
	</div>
	`;

	document.getElementById('proximaPergunta').disabled = true;
	carregarBotoes();

	document.getElementById('proximaPergunta').addEventListener('click', function() {
		divQuatro = document.getElementById('div4').innerHTML = '';
		const pagQuiz = document.getElementById("tela-quiz");
		const pagBilheteDourado = document.getElementById("tela-bilhete-dourado");
		pagQuiz.classList.add('none');
		pagBilheteDourado.classList.remove('none');
		window.scrollTo(0,0);
	});
}

//Função carregar botões da página
function carregarBotoes() {
	let resposta;
	let targetBtn;

	document.getElementById('btnAgain').disabled = true;

	document.getElementById('bt1').addEventListener('click', function(event) {
		targetBtn = event.target;
		resposta = document.getElementById('bt1').value;
		verificaResposta(resposta, targetBtn);
	});

	document.getElementById('bt2').addEventListener('click', function(event) {
		targetBtn = event.target;
		resposta = document.getElementById('bt2').value;
		verificaResposta(resposta, targetBtn);
	});

	document.getElementById('bt3').addEventListener('click', function(event) {
		targetBtn = event.target;
		resposta = document.getElementById('bt3').value;
		verificaResposta(resposta, targetBtn);
	});

	document.getElementById('bt4').addEventListener('click', function(event) {
		targetBtn = event.target;
		resposta = document.getElementById('bt4').value;
		verificaResposta(resposta, targetBtn);
	});

	document.getElementById('btnAgain').addEventListener('click', function() {
		const bt1 = document.getElementById('bt1');
		const bt2 = document.getElementById('bt2');
		const bt3 = document.getElementById('bt3');
		const bt4 = document.getElementById('bt4');
		bt1.classList.remove("button-red");
		bt2.classList.remove("button-red");
		bt3.classList.remove("button-red");
		bt4.classList.remove("button-red");
		habilitaBotoes();
	});
}

//Função para habilitar os botões da página
function habilitaBotoes() {
	document.getElementById('bt1').disabled = false;
	document.getElementById('bt2').disabled = false;
	document.getElementById('bt3').disabled = false;
	document.getElementById('bt4').disabled = false;
	document.getElementById('acertoOuErro').innerHTML = '';
}

//Função que verifica se resposta está correta ou não
function verificaResposta(resposta, btnColor) {
	if (resposta == 'correto') {
		btnColor.classList.add('button-green');
		const rightQuestion = document.getElementById('acertoOuErro');
		rightQuestion.classList.remove('none');
		rightQuestion.classList.add('green-text')
		rightQuestion.innerHTML = '&#10038; Muito bem você acertou! &#10038;';
		document.getElementById('proximaPergunta').disabled = false;
		document.getElementById('bt1').disabled = true;
		document.getElementById('bt2').disabled = true;
		document.getElementById('bt3').disabled = true;
		document.getElementById('bt4').disabled = true;
	} else {
		btnColor.classList.add('button-red');
		const notThisYet = document.getElementById('acertoOuErro');
		notThisYet.classList.remove('none');
		notThisYet.innerHTML = 'Humm, a resposta ainda não é essa!';
		document.getElementById('bt1').disabled = true;
		document.getElementById('bt2').disabled = true;
		document.getElementById('bt3').disabled = true;
		document.getElementById('bt4').disabled = true;
		document.getElementById('proximaPergunta').disabled = false;
		const btnAgain = document.getElementById('btnAgain');
		btnAgain.classList.remove('none');
		btnAgain.disabled = false;

		btnAgain.addEventListener('click', () => btnAgain.classList.add('none'));
	}
}
