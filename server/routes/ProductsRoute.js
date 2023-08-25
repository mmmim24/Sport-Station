const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// Showing all available products to a user

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sportStation'
})

router.get('/products',(req,res)=>{
    const q = 'SELECT * FROM products';
    db.query(q,(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})
router.get('/products/:id',(req,res)=>{
    const id = req.params.id;
    const q = 'SELECT * FROM products WHERE `pid`=?';
    db.query(q,(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})
module.exports = router;