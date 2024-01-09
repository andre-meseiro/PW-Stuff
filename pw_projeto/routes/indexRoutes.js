const express = require('express');
const fs = require('fs');
const router = express.Router();
const mime = require('mime-types')


router.get('/', (req, res) => {
    res.end(fs.readFileSync("./www/index.html"));
});

router.get('/styles/index.css', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("css"));
    res.end(fs.readFileSync("./www/styles/index.css"));
});

router.get('/images/portefolio.png', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("png"));
    res.end(fs.readFileSync("./www/images/portefolio.png"));
});

router.get('/images/icon.png', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("png"));
    res.end(fs.readFileSync("./www/images/icon.png"));
})

router.get('/images/shortcuticon.jpg', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("jpg"));
    res.end(fs.readFileSync("./www/images/shortcuticon.jpg"));
})

module.exports = router;