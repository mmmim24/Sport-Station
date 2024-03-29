const express = require('express');
const port = 3305;
const mysql = require('mysql');

//payment gateway
const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = 'sport6536b98db5ff9'
const store_passwd = 'sport6536b98db5ff9@ssl'
const is_live = false //true for live, false for sandbox

const generateUniqueId = require('generate-unique-id');
const cors = require('cors');
const session = require('express-session');
const date = require('date-and-time');
const cp = require('cookie-parser');
const bp = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const Product = require('./routes/ProductsRoute');
// const User = require('./routes/UserRoute');

const app = express();
// app.use('/ppp',Product);
// app.use('/pp',User);
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["POST","GET","PATCH","DELETE"],
    credentials:true
}));
app.use(express.json());
app.use(cp());
app.use(bp.json());
app.use(session({
    secret : 'qwerty',
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        maxAge: 3000*24*60*60
    }
}))
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sportStation'
})
app.get('/products',(req,res)=>{
    const q = 'SELECT * FROM products';
    db.query(q,(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})
app.get('/product/:id',(req,res)=>{
    const q = 'SELECT * FROM products WHERE `pid`=?';
    const id = req.params.id;
    db.query(q,[id],(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})
app.get('/productsize/:id',(req,res)=>{
    const q = 'SELECT * FROM stock WHERE `pid`=?';
    const id = req.params.id;
    db.query(q,[id],(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})

app.post('/shipping',(req,res)=>{
    const tid = generateUniqueId();
    const q = 'INSERT INTO shipping (`oid`,`trxnid`,`city`,`address`,`paid`) VALUES(?)';
    const q2 = 'INSERT INTO transactions (`trxnid`,`oid`,`amount`) VALUES(?)';
    const values = [
        req.body.oid,
        tid,
        req.body.city,
        req.body.address,
        req.body.amount
    ]
    const v2 = [
        tid,
        req.body.oid,
        req.body.amount
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json("an error occured");
        // return res.json(data);
    });
    db.query(q2,[v2],(err,data)=>{
        if(err) return res.json("an error occured");
        // return res.json(data);
    });
})

app.post('/uorders/:id',(req,res)=>{
    const q = 'SELECT * FROM orders WHERE `uid`=?';
    id = req.session.uid;
    db.query(q,[id],(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})

app.post('/orders',(req,res)=>{
    const q = 'SELECT * FROM orders';
    db.query(q,(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})

app.post('/order',(req,res)=>{
    const q = 'INSERT INTO orders (`oid`,`uid`,`time`,`details`,`status`,`method`) VALUES(?)';
    const values = [
        req.body.oid,
        req.body.uid,
        req.body.time,
        req.body.details,
        req.body.status,
        req.body.method
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json("an error occured");
        return res.json(data);
    });
})
app.post('/addproduct',(req,res)=>{
    const q = 'INSERT INTO products (`pid`,`pname`,`description`,`image`,`category`,`price`,`imageback`) VALUES(?)';
    const q2 = 'INSERT INTO stock (`pid`,`price`,`s`,`m`,`l`,`xl`,`xxl`) VALUES(?)';
    const id = uuidv4().slice(0,13);
    const products = [
        id,
        req.body.name,
        req.body.description,
        req.body.image,
        req.body.price,

    ]
    const size = [
        id,
        req.body.price,
        req.body.quant,
        req.body.quant,
        req.body.quant,
        req.body.quant,
        req.body.quant
    ]
    db.query(q,[products],(err,data)=>{
        if(err) return res.json("an error occured");
        // return res.json(data);
    });
    db.query(q2,[size],(err,data)=>{
        if(err) return res.json("an error occured");
        return res.json(data);
    });
})


app.post('/',(req,res)=>{
    if(req.session.username){
        return res.json({valid:true,user:req.session.username,role:req.session.role,id:req.session.uid})
    }
    else return res.json({valid:false});
})
app.post('/logout',(req,res)=>{
    req.session.destroy();
    return res.json("LOGGED OUT");
})

app.post('/users',(req,res)=>{
    const q = 'SELECT * FROM users';
    db.query(q,(err,data)=>{
        if(err) return res.json('an error occurred');
        return res.json(data);
    })
})

app.post('/signup',(req,res)=>{

    var id = Date.now().toString().slice(-5)+uuidv4().slice(8,13);
    const q = 'INSERT INTO users (`uid`,`uname`,`uemail`,`ucontact`,`upwd`,`isAdmin`) VALUES(?)';
    const values = [
        id,
        req.body.name,
        req.body.email,
        req.body.contact,
        req.body.password,
        0
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json("an error occured");
        return res.json(data);
    });
})

app.post('/profile',(req,res)=>{
    const q = 'SELECT * FROM users WHERE `uname`=?';
    const email = req.session.username;
    console.log(req.session.username,"here");
    db.query(q,[email],(err,data)=>{
        if(err) return res.json('an error profile occurred');
        return res.json(data);
    })
})
app.post('/login',(req,res)=>{
    const q = 'SELECT * FROM users WHERE `uemail`=? AND `upwd`=?';
    const email = req.body.email,password = req.body.password;
    db.query(q,[email,password],(err,data)=>{
        if(err) 
        return res.json("an error occured");
        if(data.length>0){
            req.session.username = data[0].uname;
            req.session.role = data[0].isAdmin;
            req.session.uid = data[0].uid;
            return res.json("SUCCESS");
        }
        else{
            return res.json("FAILED");
        }
    });
}) 


//sslcommerz init
app.get('/init', (req, res) => {
    const data = {
        total_amount: 100,
        currency: 'BDT',
        tran_id: 'REF123', // use unique tran_id for each api call
        success_url: 'http://localhost:3305/success',
        fail_url: 'http://localhost:3305/fail',
        cancel_url: 'http://localhost:3305/cancel',
        ipn_url: 'http://localhost:3305/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'customer@example.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.init(data).then(apiResponse => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL
        res.redirect(GatewayPageURL)
        console.log('Redirecting to: ', GatewayPageURL)
    });
})
//sslcommerz validation 

app.get('/validate', (req, res) => {
    const data = {
        val_id:ADGAHHGDAKJ456454 //that you go from sslcommerz response
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.validate(data).then(data => {
        //process the response that got from sslcommerz 
       // https://developer.sslcommerz.com/doc/v4/#order-validation-api
    });
}) 

//SSLCommerz initiateRefund

app.get('/initiate-refund', (req, res) => {
    const data = {
        refund_amount:10,
        refund_remarks:'',
        bank_tran_id:CB5464321445456456,
        refe_id:EASY5645415455,
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.initiateRefund(data).then(data => {
        //process the response that got from sslcommerz 
        //https://developer.sslcommerz.com/doc/v4/#initiate-the-refund
    });
})
//SSLCommerz refundQuery

app.get('/refund-query', (req, res) => {
    const data = {
        refund_ref_id:SL4561445410,
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.refundQuery(data).then(data => {
        //process the response that got from sslcommerz
        //https://developer.sslcommerz.com/doc/v4/#initiate-the-refund
    });
})

//SSLCommerz transactionQueryByTransactionId
//you also use this as internal method
app.get('/transaction-query-by-transaction-id', (req, res) => {
    const data = {
        tran_id:AKHLAKJS5456454,
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.transactionQueryByTransactionId(data).then(data => {
        //process the response that got from sslcommerz
        //https://developer.sslcommerz.com/doc/v4/#by-session-id
    });
})

//SSLCommerz transactionQueryBySessionId
//you also use this as internal method
app.get('/transaction-query-by-session-id', (req, res) => {
    const data = {
        sessionkey:AKHLAKJS5456454,
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.transactionQueryBySessionId(data).then(data => {
        //process the response that got from sslcommerz
        //https://developer.sslcommerz.com/doc/v4/#by-session-id
    });
})

app.listen(port,()=>{
    console.log(`listening... from ${port}`);
})