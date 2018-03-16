const express = require('express');
const bodyParser = require('body-parser');

let app = new express();
app.use(bodyParser.json());

app.post('/signUp', (req, res) => {
    let user = req.body.user;
    console.log(user);
    // todo DB
    res.send({"status":"ok"});
});

app.listen(3000);