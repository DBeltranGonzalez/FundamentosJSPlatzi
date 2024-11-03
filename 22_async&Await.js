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