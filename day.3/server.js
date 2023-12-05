const express = require('express');
const app = express()
const mongoose = require('mongoose');
const config = require('./utils/config.js');
const { info, error } = require('./utils/logger.js');
//midleware
app.use(express.json());

//connect to the database
info('connecting to DB...')
mongoose.connect(config.MONGODB_URI)

    .then(() => {
        console.log("connecting to mongodb")
    })
    .catch((error) => {
        error('error connecting to mongodb..', error);
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


app.listen(config.PORT, () => {
    info(`server running at http://${config.HOSTNAME}:${config.PORT}`)
});














