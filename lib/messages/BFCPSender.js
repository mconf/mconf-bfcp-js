'use strict';

const util = require('util');
const parser = require('./BFCPParser');

/**
 * Sender for BFCP API messages
 * @memberof module:mconf-bfcp-js
 */
class BFCPSender {

  constructor (sender) {
    this._sender = sender;
  }

  /**
   * Send message to BFCP server
   * @param  {module:mconf-bfcp-js.BFCPMessage} message The current message
   */
  sendMessage(message, callback) {
    var sMessage = parser.stringify(message);
    if ( util.isString(sMessage) && sMessage.length ) {
      this._sender.send(sMessage, callback);
    }
  }
}

module.exports = BFCPSender;
