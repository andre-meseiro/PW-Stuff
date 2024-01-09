const express = require('express');
const fs = require('fs');
const router = express.Router();
const mime = require('mime-types')


router.get('/', (req, res) => {
    res.end(fs.readFileSync("./www/equipadesenvolvimento.html"));
});

router.get('/styles/equipadesenvolvimento.css', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("css"));
    res.end(fs.readFileSync("./www/styles/equipadesenvolvimento.css"));
});

router.get('/images/imagem_andre.png', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("png"));
    res.end(fs.readFileSync("./www/images/imagem_andre.png"))
});

router.get('/images/imagem_pedro.jpg', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("png"));
    res.end(fs.readFileSync("./www/images/imagem_pedro.jpg"))
});

module.exports = router;