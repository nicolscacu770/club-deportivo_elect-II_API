const express = require('express');
const deportistas = require('./deportista.router');
const disciplina = require('./disciplina.router');
const evento = require('./evento.router')

//function routers
function router(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/deportistas', deportistas);
    router.use('/disciplinas', disciplina);
    router.use('/eventos', evento);
}

module.exports = router;