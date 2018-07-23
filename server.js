const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(PORT, () =>{
    console.log("App is listening on port: " + PORT)
})

