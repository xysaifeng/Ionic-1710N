const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

let pool = mysql.createPool({
    user: 'root'
});

let app = new express();
app.use(bodyParser.json());

app.post('/signUp', (req, res) => { // 1. 接收请求
    let email = req.body.email;
    let password = req.body.password;
    let sql = 'INSERT INTO db.user VALUE(NULL, ?, ?)';
    pool.query(sql, [email, password], (err, results) => {
        if (err) throw err;
        if (results.affectedRows === 1) {
            res.send({"status": "ok"}); // 3.1 返回响应
        } else {
            res.send({"status": "err"}); // 3.2 返回响应
        }
    });

});

app.listen(3000);

// shift + ctrl + f10