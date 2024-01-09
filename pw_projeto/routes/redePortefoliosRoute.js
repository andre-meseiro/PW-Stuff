const express = require('express');
const fs = require('fs');
const router = express.Router();
const mime = require('mime-types');
const loginModel = require('../models/loginModel');
const proModel = require('../models/professionalModel');
const companyModel = require('../models/companyModel')
const querystring = require('querystring');

router.get('/', (req, res) => {
    let query = querystring.parse(req.url.split('?')[1]);
    loginModel.getLoginType(function (resultObject) {
        switch (resultObject[0].login_type) {
            case "admin": {
                renderAdminPage(res, query.id)
                break;
            }
            case "company": {
                renderCompanyPage(res, query.id);
                break;
            }
            case "user": {
                renderUserPage(res, query.id);
                break;
            }
        }
    }, query.id);
});

router.get('/styles/redeportefolios.css', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("css"));
    res.end(fs.readFileSync("./www/styles/redeportefolios.css"));
});

//Admin
function renderAdminPage(res, id) {
    proModel.readPortfolios(function (professionals) {
        companyModel.readCompanyPending(function (companies) {
            res.render("adminRede", { professionals: professionals, companies: companies });
        })
    });
}

router.get('/styles/redeadmin.css', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("css"));
    res.end(fs.readFileSync("./www/styles/redeadmin.css"));
});


//Company
function renderCompanyPage(res, id) {
    companyModel.readCompanyPending(function (companies) {
        for (company of companies) {
            if (company.login == id) {
                res.redirect("approval");
                return;
            }
        }
        proModel.readPublicPortfolios(function (professionals) {
            res.render("companyRede", { professionals: professionals });
        });
    })
}

router.get('/approval', (req, res) => {
    res.end(fs.readFileSync("./www/pendingapproval.html"));
});

router.get('/styles/redecompany.css', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("css"));
    res.end(fs.readFileSync("./www/styles/redecompany.css"));
});

router.get('/scripts/companyFilters.js', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("js"));
    res.end(fs.readFileSync("./www/scripts/companyFilters.js"));
});

//Users
function renderUserPage(res, id) {
    proModel.readPortfoliosByID(function (portefolio) {
        res.render("userRede", { portefolio: portefolio[0] })
    }, id);
}

router.get('/styles/redeprofessional.css', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("css"));
    res.end(fs.readFileSync("./www/styles/redeprofessional.css"));
});

router.get('/scripts/userEdit.js', (req, res) => {
    res.setHeader('Content-Type', mime.lookup("js"));
    res.end(fs.readFileSync("./www/scripts/userEdit.js"));
});


module.exports = router;