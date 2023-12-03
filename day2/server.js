const express = require('express');
const app = express()
//midleware
app.use(express.json());

HOSTNAME = '168.172.50.1'
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server running at http://${HOSTNAME}:${PORT}`)
});




