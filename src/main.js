/* eslint-disable no-undef */
const obrasEscolhidas = [];
// const data = "https://thingproxy.freeboard.io/fetch/";
const data = "https://api.allorigins.win/get?url=";
const urls = [
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=tarsila-do-amaral-Abaporu",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=tarsila-do-amaral-Morro-da-favela",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=o-grito-do-ipiranga",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=candido-portinari-Futebol",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=tarsila-do-amaral-a-cuca",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=aldemir-martins-Bumba-meu-Boi",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=morro-vermelho-lasar-segall",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=girl-with-the-gas-mask",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=volpi-grande-fachada-festiva",
    "https://www.wikiart.org/en/api/2/PaintingSearch?term=meu-limao"
]

let obrasPaginated = "";
const listaDeObras = document.getElementById("lista-obras");

function frase(nomeDaObra) {
    let frase;
    switch(nomeDaObra) {
        case "Abaporu":
            frase = "Onde será que esse homem compra sapatos?";
            break;
        case "Morro da favela":
            frase = "Esse lugar se parece com seu bairro?";
            break;
        case "Futebol":
            frase = "Você já jogou futebol na terra?";
            break;
        case "Independence or Death! (The Ipiranga Shout)":
            frase = "Você sabia que esse quadro NÃO retrata o momento da Independência do Brasil? (Boatos que tinha meia dúzia de pessoas montadas em burrinhos)";
            break;
        case "A Cuca":
            frase = "Que bicho é esse?";
            break;
        case "Bumba meu Boi":
            frase = "Você conhece o Bumba meu Boi? É um folguedo do Maranhão e Patrimônio Cultural Imaterial da Humanidade.";
            break;
        case "Morro Vermelho":
            frase = "Esse aqui dá calor só de olhar, não é não?";
            break;
        case "Girl With The Gas Mask":
            frase = "Como você acha que seremos lembrados no futuro?";
            break;
        case "Grande fachada festiva":
            frase = "Tem um artista conhecido só por pintar bandeirinhas! O que elas te lembram?";
            break;
        case "Meu Limão":
            frase = "Esse quadro aqui se chama “Meu limão”. Sim, eu também não entendi nada.";
            break;
    }
    return frase;
}

const promises = urls.map(url => fetch(data+url).then(response => response.json()));
Promise.all(promises).then(allData => allData.map(obra => {
    let dadosDaObra = JSON.parse(obra.contents).data[0];
    obrasEscolhidas.push(dadosDaObra);
    
    obrasPaginated += `
        <li>
            <img src="${dadosDaObra.image}" alt="${dadosDaObra.artistUrl}-${dadosDaObra.title}" class="obra-img" />
            <p class="frase-obra"><i><b>${frase(dadosDaObra.title)}</i></b></p>
            <p class="dados-obra">${dadosDaObra.title} (${dadosDaObra.completitionYear})</p>
            <p class="dados-obra">${dadosDaObra.artistName}</p>
        </li>
    `

    listaDeObras.innerHTML = obrasPaginated;
}));

function getImageURLObrasEscolhidas(nomeDaObra) {
    for (let obra of obrasEscolhidas) {
        if(obra.title === nomeDaObra){
            return obra.image
        }
    }
}

export default getImageURLObrasEscolhidas;