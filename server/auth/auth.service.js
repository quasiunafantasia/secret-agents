'use strict';

var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/environment');
var redisClient = require('../redis').redisClient;
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var compose = require('composable-middleware');
var User = require('../api/user/user.model');
var validateJwt = expressJwt({ secret: config.secrets.session });
var TOKEN_EXPIRATION = 60;
var TOKEN_EXPIRATION_SEC = TOKEN_EXPIRATION * 60;


exports.expireToken = function(headers) {
    var token = getToken(headers);

    if (token != null) {
        redisClient.set(token, { is_expired: true });
        redisClient.expire(token, TOKEN_EXPIRATION_SEC);
    }
};

var getToken = function(headers) {
    if (headers && headers.authorization) {
        var authorization = headers.authorization;
        var part = authorization.split(' ');

        if (part.length == 2) {
            var token = part[1];

            return part[1];
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
};

exports.logout = function(req, res) {
    if (req.user) {
        tokenManager.expireToken(req.headers);

        delete req.user;
        return res.send(200);
    }
    else {
        return res.send(401);
    }
}

var verifyToken = function (req, res, next) {
    var token = getToken(req.headers);
    console.log('token is', token);
    redisClient.get(token, function (err, reply) {
      //console.log('reply', reply);
        if (err) {
            console.log('error redis', err);
            return res.send(500);
        }

        if (! reply) {
            res.send(401);
        }
        else {
          console.log('redis is ok!');
            next();
        }

    });
};

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
function isAuthenticated(req, res, next) {
  console.log('check token');
  // allow access_token to be passed through query parameter as well
  if(req.query && req.query.hasOwnProperty('access_token')) {
    req.headers.authorization = 'Bearer ' + req.query.access_token;
  }
  var token = getToken(req.headers);
  console.log('starting redis');
  redisClient.get(token, function(err, userId) {
    console.log('redis cb');
    if (err) {
      console.log('error redis', err);
      return res.send(500);
    }
    if (! userId) {
      console.log('no token');
        res.send(401);
    }
    else {
      console.log('redis is ok!');
      User.findById(userId, function (err, user) {
        if (err) return next(err);
        if (!user) return res.send(401);

        req.user = user;
        next();
      });
    }
  });
}

// /**
//  * Checks if the user role meets the minimum requirements of the route
//  */
function hasRole(roleRequired) {
  if (!roleRequired) throw new Error('Required role needs to be set');

  return compose()
    .use(verifyToken)
    .use(function meetsRequirements(req, res, next) {
      if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
        next();
      }
      else {
        res.send(403);
      }
    });
}

// /**
//  * Returns a jwt token signed by the app secret
//  */
 function signToken(id) {
   return jwt.sign({ _id: id }, config.secrets.session, { expiresInMinutes: 60*5 });
 }

// /**
//  * Set token cookie directly for oAuth strategies
//  */
// function setTokenCookie(req, res) {
//   if (!req.user) return res.json(404, { message: 'Something went wrong, please try again.'});
//   var token = signToken(req.user._id, req.user.role);
//   res.cookie('token', JSON.stringify(token));
//   res.redirect('/');
// }

exports.isAuthenticated = isAuthenticated;
exports.hasRole = hasRole;
exports.verifyToken = verifyToken;
exports.signToken = signToken;
exports.getToken = getToken;
exports.getIdByToken = function(headers, cb) {
  return redisClient.get(getToken(headers), cb);
};
// exports.setTokenCookie = setTokenCookie;
