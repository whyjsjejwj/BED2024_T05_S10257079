const express = require('express');
const app = express();
const port = 3000;
const path = '/Users/65886/OneDrive/Pictures/Documents/Homework/BED/Pract2';

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/', (req, res) => {
    res.send("Got a POST request");
});

app.put('/user', (req, res) => {
    res.send("Got a PUT request at /user");
});

app.delete('/user', (req, res) => {
    res.send("Got a DELETE request at /user");
});

app.use(express.static(path));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
