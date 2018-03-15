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

    let sql = 'SELECT * FROM db.user WHERE email = ?';
    pool.query(sql, [email], (err, results) => {
        if (err) throw err;
        if (results.length === 1) {
            res.send({"status": "exist"});
        }
    });

    sql = 'INSERT INTO db.user VALUE(NULL, ?, ?)';
    pool.query(sql, [email, password], (err, results) => {
        if (err) throw err;
        if (results.affectedRows === 1) {
            res.send({"status": "ok"}); // 3.1 返回响应
        } else {
            res.send({"status": "err"}); // 3.2 返回响应
        }
    });
});

app.post('/signIn', (req, res) => {
    let user = req.body.user;
    let sql = `SELECT * 
                FROM db.user 
                WHERE email = ? AND password = ?`;
    pool.query(sql, [user.email, user.password], (err, results) => {
        if (err) throw err; // Ctrl + Alt + T
        if (results.length === 1) {
            res.send({"status": "ok"});
        } else {
            res.send({"status": "err"});
        }
    });
})
;

app.listen(3000);

// shift + ctrl + f10