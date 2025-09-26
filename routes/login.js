const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    const {email, senha} = req.body;

    try{
        const user =  await db.getUser(email);
        const userStatus = user.status;

        if(!user){ //se usuario não existir
            return res.status(401).json({message: "Usuário não encontrado", type:"error"});
        }

        const senhaValida = await bcrypt.compare(senha, user.senha);

        if(!senhaValida){
            return res.status(401).json({message: "Senha inválida", type: "error"});
        }
        
        if(userStatus != 'ativo'){
            return res.status(401).json({message: "Aguarde a aprovação do síndico para entrar no sistema", type: "error"})
        }
        return res.json({message: "Login efetuado com sucesso", type:"success"})

    } catch(err) {
        console.error("erro no login")
        return res.status(500).json({message: "erro interno no servidor", type:"error"})
    }
    
})

module.exports = router;