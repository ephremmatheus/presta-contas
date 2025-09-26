const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

})

router.post('/', (req, res) => {
    const data = req.body.data;
    const descricao = req.body.descricao;
    const valor = req.body.valor
    
    
    const elementos = [req.body];
    console.log(elementos)
})

module.exports = router;