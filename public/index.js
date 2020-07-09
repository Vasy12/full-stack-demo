'use strict';

window.addEventListener( 'load', render );
document.getElementById( 'refreshBtn' ).addEventListener( 'click', render );

const BASE_URL = 'http://192.168.1.148:3000/api/';
const userName = prompt( 'Your name' ) || 'anonymous';
const msgFormElem = document.getElementById( 'msgForm' );
const msgInputElem = document.getElementById( 'msgInput' );
const msgListElem = document.getElementById( 'msgList' );

msgFormElem.addEventListener( 'submit', e => {
  e.preventDefault();
  const msgValue = msgInputElem.value;

  fetch( `${BASE_URL}comment`, {
    method: 'POST',
    headers: {
      ['Content-type']: 'application/json',
    },
    body: JSON.stringify( {
                            author: userName,
                            body: msgValue,
                          } ),

  } )
    .then( response => {
      render();
    } )
    .catch( err => alert( 'Not OK' ) );

  return false;
} );

function render() {
  getAllMessages()
    .then( messages => {
      msgListElem.innerHTML = '';
      messages.forEach( msg => {
        msgListElem.appendChild( renderMessage( msg ) );
      } );
    } );
}

function renderMessage(msg) {
  const msgListItem = document.createElement( 'li' );

  const msgAuthorElem = document.createElement( 'strong' );
  msgAuthorElem.innerHTML = msg.author;

  const msgBodyElem = document.createElement( 'p' );
  msgBodyElem.innerHTML = msg.body;

  msgListItem.appendChild( msgAuthorElem );
  msgListItem.appendChild( msgBodyElem );

  return msgListItem;
}

function getAllMessages() {

  return fetch( `${BASE_URL}comments` )
    .then( response => response.json() );

}