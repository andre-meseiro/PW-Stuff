const express = require('express');
const fs = require('fs');
const router = express.Router();
const mime = require('mime-types')

router.get('/', (req, res) => {
    res.end(fs.readFileSync("./www/registoempresa.html"));
});

router.get('/styles/registoempresa.css', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("css"));
    res.end(fs.readFileSync("./www/styles/registoempresa.css"));
});

router.get('/scripts/validateRegistoEmpresa.js', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("js"));
    res.end(fs.readFileSync("./www/scripts/validateRegistoEmpresa.js"));
});

module.exports = router;