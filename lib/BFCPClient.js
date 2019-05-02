'use strict';

const BFCPBaseClient = require('./BFCPBaseClient');
const BFCPTransactionManager = require('./BFCPTransactionManager');

const FloorReleaseMessage = require('./messages/floorRelease')
const FloorRequestMessage = require('./messages/floorRequest')
const StartBFCPConnectionMessage = require('./messages/startBfcpConnection');
const StopBFCPConnectionMessage = require('./messages/stopBfcpConnection');
const FloorRequestResponseMessage = require('./messages/floorRequestResponse');
const AllocateConnectionResources = require('./messages/allocateConnectionResources');

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
    caller,
    params) {

    const message =
      new StartBFCPConnectionMessage(...arguments);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  floorRequestResponse (conference,
    endpointId,
    status,
    params) {

    const message =
      new FloorRequestResponseMessage(...arguments);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  stopBfcpConnection (conference,
    endpointId,
    params) {

    const message =
      new StopBFCPConnectionMessage(...arguments);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  floorRequest (conference,
    endpointId,
    params) {

    const message =
      new FloorRequestMessage(...arguments);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  floorRelease (conference,
    endpointId,
    params) {

    const message =
      new FloorReleaseMessage(...arguments);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  allocateConnectionResources (conference,
    transportProtocol,
    params) {

    const message =
      new AllocateConnectionResources(...arguments);

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
