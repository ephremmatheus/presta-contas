const express = require('express');
const router = express.Router();
const db = require('../db.js');

const bcrypt = require('bcrypt'); 


router.get('/', (req, res) => res.sendStatus(201));

router.post('/', async (req, res) => {
    try{
        const hashSenha = await bcrypt.hash(req.body.senha, 10);
        req.body.senha = hashSenha;
        const results = await db.cadastrarUsuario(req.body);
        res.json(results);
    } catch(e){
        console.log(e)
    }

})

module.exports = router;