'use strict';

const BFCPBaseClient = require('./BFCPBaseClient');
const BFCPTransactionManager = require('./BFCPTransactionManager');

const StartBFCPConnectionMessage = require('./messages/startBfcpConnection');

/**
 * This class handles connection to Media Control Server application
 * @extends module:mconf-bfcp-js.BFCPBaseClient
 * @memberof module:mconf-bfcp-js
 * @fires {@link module:mconf-bfcp-js#event:joined joined}
 */
class BFCPClient extends BFCPBaseClient {
  /**
   * Create a client for the Media Control Server specified by the given URI
   * @param  {String}   uri      The WebSocket URI of the Media Control Server
   */
  constructor (uri) {
    super();
    this.createConnection(uri);
  }

  deferTransaction (message) {
    BFCPTransactionManager.addTransaction(message);
    this.send(message);
    return message.promise;
  }

  /**
   * TODO docs
   */
  startBfcpConnection (conference,
    endpointId,
    destinationIpAddress,
    destinationPort,
    transportProtocol,
    floorControlRole,
    setup,
    connectionState,
    params) {

    if (!conference || typeof(conference) !== 'string') {
      throw new Error('Error : Invalid conference ID');
    }

    if (!endpointId || typeof(endpointId) !== 'string') {
      throw new Error('Error : Invalid endpointId');
    }

    if (!destinationIpAddress || typeof(destinationIpAddress) !== 'string') {
      throw new Error('Error : Invalid destinationIpAddress');
    }

    const message =
      new StartBFCPConnectionMessage(...arguments);

    if (message) {
      return this.deferTransaction(message);
    }
  }
}

/**
 * @ignore
 */
BFCPClient.prototype.send;

/**
 * @ignore
 */
BFCPClient.prototype.createConnection;

module.exports = BFCPClient;
