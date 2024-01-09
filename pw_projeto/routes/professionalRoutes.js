const express = require('express');
const fs = require('fs');
const router = express.Router();
const mime = require('mime-types');
const query = require('querystring');
const proModel = require('../models/professionalModel');
const querystring = require('querystring');

router.post('/registo', (req, res) => {
    proModel.createProfessional(function (resultObject) {
        res.redirect(`../redeportefolios/?id=${resultObject[0].login}`);
    }, req.body);
});

router.get('/', (req, res) => {
    let query = querystring.parse(req.url.split('?')[1]);
    if (query.id) {
        proModel.readProfessionalByID(function (resultObject) {
            res.end(JSON.stringify(resultObject));
        }, query.id);
    } else if (query.email) {
        proModel.readProfessionalByEmail(function (resultObject) {
            res.end(JSON.stringify(resultObject));
        }, query.email);
    } else {
        res.status(404).end();
    }
});

router.put('/edit', (req, res) => {
    proModel.updateProfessional(function () {
        res.redirect('back');
    }, req.body)
});

router.post('/addwork', (req, res) => {
    proModel.createProfessionalWorkplace(function () {
        res.redirect('back');
    }, req.body);
});

router.post('/addedu', (req, res) => {
    proModel.createProfessionalEducation(function () {
        res.redirect('back');
    }, req.body);
});

module.exports = router;