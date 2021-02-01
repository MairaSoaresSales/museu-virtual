const url = `https://www.wikiart.org/en/api/2/PaintingSearch?term=Abaporu&authSessionKey=ba5e4f69d898`;

// const myList = document.querySelector('ul');

fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        }
    )
.catch(console.error);
