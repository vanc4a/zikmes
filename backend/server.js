const express = require('express');

const app = express();

app.use('/api',
    (req,res,next) =>{
        console.log(req.headers)
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept, token, file, multipart/form-data");
        next()
    },
    (req,res) => {
    // some process 
    res.status(200).send({title: 'Заявка успешно отправлена.'})
    }
)

app.listen(3000)