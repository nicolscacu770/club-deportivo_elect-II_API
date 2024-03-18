const express = require('express');
const cors = require('cors');

const router = require('./routers/index.router');

const PORT = 3001;
const app = express();

app.use( cors() );

app.set( 'PORT', process.env.PORT || PORT );
app.set( express.json() );

router(app);
app.use("/", (req, res) => res.send(`<HTML><h1>Welcome to club deportivo API</h1><br><p>built on express</p></HTML>`));

app.listen( app.get('PORT'), () => console.log( `servidor running and listen to port ${PORT}` ));