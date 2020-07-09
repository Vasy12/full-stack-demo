'use strict';
const createApp = require( './app.js' );
const app = createApp();

const PORT = process.env.PORT || 3000;

app.listen( PORT );
