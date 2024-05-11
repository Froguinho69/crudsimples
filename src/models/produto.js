const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    }
})

const Pessoa = mongoose.model('pessoa', schema)

module.exports = Pessoa