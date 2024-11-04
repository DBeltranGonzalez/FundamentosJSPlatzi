function sendHTTPRequest(method, url, data) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        header: {
            'Content-Type': 'applicacion/json',
        },
    }).then((response) => {
        return(response.json());
    })
}

async function fetchPosts() {
    const responseData = await sendHTTPRequest('GET', 'https://swapi.dev/api/films/');
    console.log(responseData);
    const listOfPosts = responseData;
}