const express = require('express');
const fs = require('fs');
const router = express.Router();
const mime = require('mime-types');
const query = require('querystring');
const companyModel = require('../models/companyModel');


router.post('/registo', (req, res) => {
    companyModel.createCompany(function (resultObject) {
        res.redirect(`../portefolios`);
    }, req.body);
});

router.delete('/', (req, res) => {
    companyModel.deleteCompany(function () {
        res.redirect('back');
    }, req.body.login);
});

router.put('/', (req, res) => {
    companyModel.updateCompanyStatus(function () {
        res.redirect('back');
    }, req.body.login)
});

module.exports = router;