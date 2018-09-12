'use strict';
var BFCPMessage = require('./BFCPMessage');

class BFCPParser {
  /**
   * Parse an stringyfied message into {@link module:mconf-bfcp-js.BFCPMessage
   *  BFCPMessage}
   * @param  {String} message Input message
   * @return {@link module:mconf-bfcp-js.BFCPMessage BFCPMessage}
   */
  static parse(message) {
    var pMessage = JSON.parse(message.data);
    return new BFCPMessage(pMessage.name || pMessage._name, pMessage.body,
      { transactionId : pMessage.transactionId });
  }

  static stringify(message) {
    return JSON.stringify(message);
  }
}

module.exports = BFCPParser;
