function validarOrdem(req, res, next){
    if(!req.body.motorista){
        return res.status(400).json({ "erro": "O campo motorista e obrigatorio"})
    }

    if(!req.body.servico){
        return res.status(400).json({ "erro": "O campo servico e obrigatorio"})
    }

    if( typeof req.body.valor !== "number"){
        return res.status(400).json({ "erro": "O campo valor deve ser um numero"})
    }

     if(Number(req.body.valor) <= 0){
        return res.status(400).json({ "erro": "O campo valor deve ser maior que zero"})
    }

    next()
}

module.exports = validarOrdem