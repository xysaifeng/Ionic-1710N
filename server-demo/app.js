const express = require('express');

let app = new express();

app.get('/signUp', (req, res) => { // 1. 接收请求
    let email = req.request.email;
    let password = req.request.password;
    console.log(`email: ${email}; password: ${password}`);
    // todo MySQL
    res.send({"status":"ok"}); // 3. 返回响应
});

app.listen(3000);

// shift + ctrl + f10