const express = require('express');
const fs = require('fs');
const router = express.Router();
const mime = require('mime-types');


router.get('/', (req, res) => {
    res.end(fs.readFileSync("./www/login.html"));
});

router.get('/styles/login.css', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("css"));
    res.end(fs.readFileSync("./www/styles/login.css"));
});

router.get('/scripts/validateLogin.js', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("js"));
    res.end(fs.readFileSync("./www/scripts/validateLogin.js"));
});

const loginModel = require('../models/loginModel');

router.post('/validate', (req, res) => {
    loginModel.validateLogin(function (resultObject) {
        if (resultObject.error) {
            res.json({ "message": "error", "error": resultObject.error });
        }
        else {
            resultObject[0].length === 0 ? res.redirect("../login") : res.redirect(`../redeportefolios/?id=${resultObject[0][0].loginID}`);
        }
    }, req.body.email, req.body.palavrapasse);
});

module.exports = router;