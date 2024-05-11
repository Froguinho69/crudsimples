const Pessoa = require('../models/pessoa')

async function getAll(req, res) {
    const pessoas = await Pessoa.find()
    res.json(pessoas)
}

async function create(req, res) {
    try {
        const pessoa = new Pessoa(req.body)
        const pessoaCriado = await pessoa.save()
        res.status(201).json(pessoaCriado)
    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                mensagem: "Ocorreu um erro no cadastro",
                erro: error
            }
        )
    }
}

module.exports = {
    getAll,
    create
}