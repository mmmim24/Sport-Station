const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sportStation'
})

app.get('/users',(req,res)=>{
    const q = 'SELECT * FROM users';
    db.query(q,(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})

app.post('/signup',(req,res)=>{
    const q = 'INSERT INTO users (`uname`,`uemail`,`ucontact`,`upwd`) VALUES(?)';
    const values = [
        req.body.name,
        req.body.email,
        req.body.contact,
        req.body.password
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json("an error occured");
        return res.json(data);
    });
})

app.post('/login',(req,res)=>{
    const q = 'SELECT * FROM users WHERE `uemail`=? AND `upwd`=?';
    const email = req.body.email,password = req.body.password;
    db.query(q,[email,password],(err,data)=>{
        if(err) 
            return res.json("an error occured");
        if(data.length>0){
            return res.json("SUCCESS");
        }
        else{
            return res.json("FAILED");
        }
    });
}) 


app.listen(3305,()=>{
    console.log('listening...');
})