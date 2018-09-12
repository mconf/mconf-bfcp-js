'use strict';
/**
 * mconf-bfcp-js: A simple client library for the MCS-BFCP application
 * @module mconf-bfcp-js
 */
var bfcp = require('./lib/BFCPClient');

bfcp.prototype.name = 'mconf-bfcp-js';
bfcp.prototype.version = '0.0.1-dev';

module.exports = bfcp;
