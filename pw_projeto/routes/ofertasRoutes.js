const express = require('express');
const fs = require('fs');
const router = express.Router();
const mime = require('mime-types')


router.get('/', (req, res) => {
    res.end(fs.readFileSync("./www/ofertasemprego.html"));
});

router.get('/styles/ofertasemprego.css', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("css"));
    res.end(fs.readFileSync("./www/styles/ofertasemprego.css"));
});

router.get('/scripts/domOfertas.js', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("js"));
    res.end(fs.readFileSync("./www/scripts/domOfertas.js"));
});

router.get('/scripts/ItemInformacaoOfertas.js', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("js"));
    res.end(fs.readFileSync("./www/scripts/ItemInformacaoOfertas.js"));
});

router.get('/scripts/InformacaoOfertas.js', (req, res) => {

    res.setHeader('Content-Type', mime.lookup("js"));
    res.end(fs.readFileSync("./www/scripts/InformacaoOfertas.js"));
});

module.exports = router;