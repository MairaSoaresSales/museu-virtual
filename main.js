let myHeaders = new Headers({
    'Accept': '*/*',
    'Accept-Language': '*',
    'Content-Language': '*',
    'Content-Type': 'text/plain'
});

let myInit = { 
    method: 'GET',
    headers: myHeaders,
    mode: 'no-cors',
    cache: 'default' 
};

fetch('https://www.wikiart.org/en/api/2/PaintingSearch?term=Abaporu', myInit)
    .then(response => {return response.json()})
    .then((result) => {
        console.log(result)
    })

