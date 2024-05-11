const express = require('express')
const router = express.Router()

const PessoaController = require('../controllers/PessoaController')

router.get('/', (req, res) => {
    res.json("OK")
})

router.get('/pessoas', PessoaController.getAll)
router.post('/pessoas', PessoaController.create)

module.exports = router