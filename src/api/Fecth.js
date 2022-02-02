const url = 'http://192.168.1.4/api-react/'

const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
        a: 10,
        b: 20
    })
}

fetch(url, options)
    .then(response => {
        console.log(response.status)
    })