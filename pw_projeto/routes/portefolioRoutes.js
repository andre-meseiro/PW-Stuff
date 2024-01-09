const express = require('express');
const fs = require('fs');
const router = express.Router();
const mime = require('mime-types')
const query = require('querystring')


router.get('/', (req, res) => {
    res.end(fs.readFileSync("./www/portefoliocurriculosinicial.html"));
});

router.get('/styles/portefoliocurriculosinicial.css', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("css"));
    res.end(fs.readFileSync("./www/styles/portefoliocurriculosinicial.css"));
});

router.get('/images/curriculo_imagem.png', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("png"));
    res.end(fs.readFileSync("./www/images/curriculo_imagem.png"))
});



module.exports = router;