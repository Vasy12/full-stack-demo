'use strict';
const express = require( 'express' );
const { Comment } = require( './../models' );
const router = express.Router();

router.post( '/comment', async (req, res, next) => {
  try {

    const newCommentInstance = await Comment.create( req.body );
    if (newCommentInstance) {
      res.sendStatus( 201 );
      return;
    }
    res.status( 400 );
    next( {
            message: 'Bad Request'
          } );

  } catch (e) {
    next( e );
  }
} );
router.get( '/comments', async (req, res, next) => {
  try {
    const comments = await Comment.findAll( {} );
    res.send( comments );
  } catch (e) {
    next( e );
  }
} );
module.exports = router;
