// Conectando con una API:

function fetchData() {
    fetch('https://swapi.dev/api/films/')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}

// Conexión con una API con async & await:

async function newFetch() {
    try {
        let response = await fetch('https://swapi.dev/api/people/');
        let data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

// Uso de for para cargar múltiples promesas de un arreglo:

const apis = [
    'https://swapi.dev/api/films/',
    'https://swapi.dev/api/people/',
    'https://swapi.dev/api/planets/',
    'https://swapi.dev/api/species/',
    'https://swapi.dev/api/starships/',
    'https://swapi.dev/api/vehicles/'
];

async function fetchDataFor() {
    try {
        for await(let api of apis) {
            let response = await fetch(api);
            let data = await response.json();
            console.log(data);
        }
    } catch(error) {
        console.log(error);
    }
}