const express = require('express');
const app = express()

let notes = [
    {
        id: 1,
        content: 'backend using node.js',
        important: true
    },
    {
        id: 2,
        content: 'node.js is a open source',
        important: false
    },
    {
        id: 3,
        content: 'simple web server using node.js',
        important: true
    }
];

// const app = http.createServer((request, response) => {
//     response.stateCode = 200;
//     response.setHeader('content-type', 'appliaction/json');
//     response.end(JSON.stringify(notes));
// });

app.get('/', (request, response) => {
    response.send('hello world');
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});