const express = require('express');
const app = express()
const mongoose = require('mongoose');
//midleware
app.use(express.json());

//connect to the database
 
const url = `mongodb+srv://praveenmech483:Guvi2023@cluster0.fzxjzjw.mongodb.net/B4748DB`
console.log('connecting to DB...')
mongoose.connect(url)

    .then(() => {
        console.log("connecting to mongodb")
    })
    .catch((error) => {
        console.error('error connecting to mongodb..', error);
    })

//define a schema
    
const noteSchema = new mongoose.Schema({
    id: Number,
    content: String,
    import: Boolean
    
})

//create a model

const note = new mongoose.model('note', noteSchema, 'notes');

//endpoint to view all the notes
app.get('/api/notes', (request, response) => {
    note.find({}, {})
        .then(notes => {
            response.status(200).json(notes);
    })
})

HOSTNAME = '168.172.50.1'
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server running at http://${HOSTNAME}:${PORT}`)
});













