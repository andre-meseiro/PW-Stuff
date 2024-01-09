var express = require('express');
var app = express();
const options = require('./config/options.json');
const bodyParser = require('body-parser');
const connection = require('./config/connection')
const methodOverride = require('method-override')

var server = app.listen(options.server.port, options.server.host, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Aplicação Express à escuta em http://%s:%s", host, port)
});

server.addListener("close", function (evt) {
    connection.end();
});

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set("view engine", "pug");
app.set("views", "./www/templates");


//Routers
app.use('/', require("./routes/indexRoutes"));
app.use('/ofertasemprego', require("./routes/ofertasRoutes"));
app.use('/equipadesenvolvimento', require("./routes/equipaRoutes"));
app.use('/portefolios', require("./routes/portefolioRoutes"));
app.use('/login', require("./routes/loginRoutes"));
app.use('/registoempresa', require("./routes/registoEmpresaRoutes"));
app.use('/registoprofissional', require("./routes/registoProfissionalRoutes"));
app.use('/redeportefolios', require("./routes/redePortefoliosRoute"));
app.use('/profissional', require("./routes/professionalRoutes"));
app.use('/empresa', require("./routes/companyRoutes"));