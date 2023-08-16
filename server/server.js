const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sportStation'
})

app.get('/signup',(req,res)=>{
    const q = 'SELECT * FROM users';
    db.query(q,(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})

app.post('/signup',(req,res)=>{
    const q = 'INSERT INTO users (`uid`,`uname`,`uemail`,`ucontact`,`upwd`) VALUES(?)';
    // const values = ['5','Mac','xaq@gmail.com','01992377665','XAQlaq43'];
    const values = [
        req.body.uid,
        req.body.uname,
        req.body.uemail,
        req.body.ucontact,
        req.body.upwd
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json("an error occured");
        return res.json(data);
    });
})


app.listen(3305,()=>{
    console.log('listening...');
})

db.connect()