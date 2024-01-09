const express = require('express');
const fs = require('fs');
const router = express.Router();
const mime = require('mime-types');


router.get('/', (req, res) => {
    res.end(fs.readFileSync("./www/registoprofissional.html"));
});

router.get('/styles/registoprofissional.css', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("css"));
    res.end(fs.readFileSync("./www/styles/registoprofissional.css"));
});

router.get('/scripts/validateRegistoPro.js', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("js"));
    res.end(fs.readFileSync("./www/scripts/validateRegistoPro.js"));
});

module.exports = router;