'use strict';

const BFCPMessage = require('./BFCPMessage');

class FloorRequestResponse extends BFCPMessage {
  constructor(
    conference,
    endpointId,
    status,
    params) {
    super();
    this.body.conference = conference;
    this.body.endpointId = endpointId;
    this.body.status = status;
    this.body.params = params;
  }
}

module.exports = FloorRequestResponse;