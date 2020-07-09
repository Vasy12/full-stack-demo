'use strict';
const express = require( 'express' );
const router = require( './routes' );

function createApp() {
  const app = express();
  app.use( express.json() );

  app.use( express.static( 'public' ) );

  app.use( '/api', router );

  app.use( (err, req, res, next) => {
    res.send( err );
  } );

  return app;
}

module.exports = createApp;
