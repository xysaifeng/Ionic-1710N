const express = require('express');

let app = new express();

app.get('/', (req, res) => { // 1. 接收请求
    // 2. 处理请求...
    console.log('get /...');
    res.send({"status":"ok"}); // 3. 返回响应
});

app.listen(3000);

// shift + ctrl + f10