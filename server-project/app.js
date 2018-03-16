const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcryptjs = require('bcryptjs');

let pool = mysql.createPool({
    user: 'root'
});

let app = new express();
app.use(bodyParser.json());

app.post('/signUp', (req, res) => {
    let user = req.body.user;
    let sql = `SELECT * 
                FROM db.user 
                WHERE email = ?`;
    pool.query(sql, [user.email], (err, results) => {
        if (err) throw err;
        if (results.length === 1) {
            // 邮箱存在
            res.send({"status": "exist"});
        }

        sql = `INSERT INTO 
                db.user(email, password) 
                VALUE(?, ?)`;
        let encryptedPassword = bcryptjs.hashSync(user.password,
            bcryptjs.genSaltSync(10));
        pool.query(sql, [user.email, encryptedPassword], (err, results) => {
            if (err) throw err;
            if (results.affectedRows === 1) {
                res.send({"status": "ok"});
            } else {
                res.send({"status": "err"});
            }
        });
    });
});

app.listen(3000);