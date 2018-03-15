const express = require('express');
const bodyParser = require('body-parser');

let app = new express();

app.use(bodyParser.json());

app.post('/signUp', (req, res) => { // 1. 接收请求
    let email = req.body.email;
    let password = req.body.password;
    // todo MySQL
    res.send({"status":"ok"}); // 3. 返回响应
});

app.listen(3000);

// shift + ctrl + f10