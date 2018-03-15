const express = require('express');

let app = new express();

app.get('/', (req, res) => {
    // ...
    res.end('It works.');
});

app.listen(3000);