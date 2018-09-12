'use strict';

const EventEmitter = require('events');
const parser = require('./BFCPParser');
const BFCPTransactionManager = require('../BFCPTransactionManager');

/**
 * Receiver for BFCP API messages
 * @memberof module:mconf-bfcp-js
 */
class BFCPReceiver extends EventEmitter {

  constructor (ws) {
    super();
    if (ws && typeof(ws) === 'object') {
      ws.addEventListener('message',this.handleMessage.bind(this));
      this._ws = ws;
    }
  }

  /**
   * Handle incoming messages for BFCP API
   * @param  {String} message Received message
   */
  handleMessage(message) {
    const _self = this;
    const pMessage = parser.parse(message);
    if ( pMessage && typeof(pMessage) === 'object' &&
      typeof(pMessage.name) === 'string' &&
      typeof(pMessage.body) === 'object') {

      const { transactionId }  = pMessage;
      BFCPTransactionManager.resolveTransaction(transactionId, pMessage.body);


      _self.emit('api', pMessage.name, { transactionId, ...pMessage.body });
    }
  }
}

module.exports = BFCPReceiver;
