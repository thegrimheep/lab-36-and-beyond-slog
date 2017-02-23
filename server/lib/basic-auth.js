'use strict';

const createError = require('http-errors');
const firebase = require('firebase');
const admin = require('firebase-admin');

module.exports = (req, res, next) => {
  if(!req.headers.authorization)
    return next(createError(401, 'no Authorization header'));

  let encoded = req.headers.authorization.split('Basic ')[1];
  if(!encoded)
    return next(createError(401, 'no basic authorization'));

  let decoded = new Buffer(encoded, 'base64').toString();
  if(!decoded)
    return next(createError(401, 'no base64 string'));

  let[email, password] = decoded.split(':');
  if(!email || !password)
    return next(createError(401, 'no email or password'));

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => {
    return admin.auth().createCustomToken(user.uid);
  })
  .then(token => {
    req.token = token;
    return firebase.auth().signOut();
  })
  .then(() => next())
  .catch(err => next(createError(401, err.message)));
};
