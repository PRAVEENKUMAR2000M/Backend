const express = require('express');
const app = express()
//midleware
app.use(express.json());
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
// endpoint to get the / route
app.get('/', (request, response) => {
    response.send('<h1>web app</h1>');
})

// endpoint to get all the notes
app.get('/api/notes', (request, response) => {
    response.json(notes);
})

//endpoint will fetch a single note
app.get('/api/notes/:id', (request, response) => {
    // console.log(request.params);
    const id = request.params.id
    const note = notes.find(note => note.id == id);
    if (note) {
        response.status(200).json(note)
    } else {
        response.status(404).json({ message: 'id does not exist' })
    }
})

//endpoint to create a new note
app.post('/api/notes', (request, response) => {
    notes = notes.concat(request.body)
    response.status(201).json({ message: 'note created successfully' })
})

//endpoint to delete a note identified by id
app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const note = notes.find(note => note.id == id)
    notes = notes.filter(note => note.id != id)
    if (note) {
        response.status(204).json(note)
    } else {
        response.status(404).json({ message: 'id does not exist' })
    }
})

//endpoint to replace the entire note identified by id with the request data

// app.put('/api/notes/:id', (request, response) => {
//     const id = request.params.id

//     const noteToReplace = request.body
//     const note = notes.find(note => note.id == id)

//      notes = notes.map(note => note.id == id ? noteToReplace : note);

//     if (note) {
//         response.status(200).json({ message: 'note replaced successfully' })
//     } else {
//         response.status(404).json({ message: 'id does not exist' })
//     }
// })

app.put('/api/notes/:id', (request, response) => {
    // get the id from the params
    const id = request.params.id;

    const noteToReplace = request.body;

    const note = notes.find(note => note.id == id);

    notes = notes.map(note => note.id == id ? noteToReplace : note);

    if (note) {
        response.status(200).json({ message: 'note replaced' });
    } else {
        response.status(404).json({ message: 'id does not exists' });
    }
});

app.patch('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const noteToUpdate = request.body
    const note = notes.find(note => note.id == id);
    notes = notes.map(note => note.id == id ? noteToUpdate : note);
    if (note) {
        response.status(200).json({ message: 'note patched' })
    } else {
        response.status(404).json({ message: 'id does not exist' })
    }
})

HOSTNAME = '168.172.50.1'
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server running at http://${HOSTNAME}:${PORT}`)
});




/*
    endpoints

    URL                        Request Type               Functionality
    /api/notes                 GET                        fetch all notes
    /api/notes/:id             GET                        fetch a single note
    /api/notes                 POST                       add a new note
    /api/notes/:id             PUT                        replace a note
    /api/notes/:id             DELETE                     delete a note
    /api/notes/:id             PATCH                      update a note

*/