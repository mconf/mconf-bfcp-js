'use strict';

const BFCPBaseClient = require('./BFCPBaseClient');

/**
 * This class represents a client in server's context. It is used to
 * send/receive data from a single client
 * @extends module:mconf-bfcp-js.BFCPBaseClient
 * @memberof module:mconf-bfcp-js
 * @fires {@link module:mconf-bfcp-js#event:join join}
 */
class BFCPResponseClient extends BFCPBaseClient {
  /**
   * Create a client for the Media Control Server given an existent connection
   * @param {external:WebSocket} [ws] An existent WebSocket connection
   */
  constructor(ws) {
    super(ws);
    this._id = ws && ws.req && ws.req.headers ?
      ws.req.headers['sec-websocket-key'] : null;
  }

  /**
   * Return the current client's ID
   * @return {String} The id of this client
   */
  get id() {
    return this._id;
  }
}

/**
 * @ignore
 */
BFCPResponseClient.prototype.send; // jshint ignore:line

/**
 * @ignore
 */
BFCPResponseClient.prototype.createConnection; // jshint ignore:line

module.exports = BFCPResponseClient;
