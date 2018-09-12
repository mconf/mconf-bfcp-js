'use strict';

const EventEmitter = require('events');

/**
 * Base Class for Media Control Server
 * @extends external:EventEmitter
 * @memberof module:mconf-bfcp-js
 */
class BFCPBase extends EventEmitter {
  constructor () {
    super();
  }
}

module.exports = BFCPBase;
