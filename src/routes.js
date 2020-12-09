const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router();



routes.post('/ongs', async(request, response)=>{

    const {name, email, wp, city, uf} = request.body;//desestruturação

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        wp,
        city,
        uf, 
    })
    

    return response.json({ id }); 
});

module.exports = routes;