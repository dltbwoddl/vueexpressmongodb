const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const {body, validationResult} = require('express-validator')
dotenv.config();

const app = express();
app.use(bodyParser.json())

app.post('/auth/signup',[
    body('email')
    .isEmail()
    .withMessage("please valid email"),
    body('password')
    .trim()
    .isLength({min:6})
    .withMessage("password must be greater than 6 characters")
    ,body('name')
    .trim()
    .not().isEmpty()
    .withMessage('None field is required')
],(req,res,next)=>{
    const errors=validationResult(req);

    if (!errors.isEmpty()){
        const error = new Error('validation failed')
        error.statusCode=422;
        error.data=errors.array();
        throw error;
    }
    console.log(req.body)
    const email = req.body.email;
    const password =req.body.password;
    const name =req.body.name;
    res.json({
        message: 'success'
    });
})

app.use((error,req,res,next)=>{
    const status = error.statusCode || 500; 
    const message = error.message;
    const data = error.data;
    res.status(status).json({
        message,data
    })
});

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vwjt7.mongodb.net/limproject?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(3000,()=>{
        console.log('listen t0 3000')
    })
}).catch( err => console.log(err) )