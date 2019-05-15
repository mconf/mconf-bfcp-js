'use strict';

const BFCPMessage = require('./BFCPMessage');

class AllocateConnectionResources extends BFCPMessage {
  constructor(
    conference,
    endpointId,
    transportProtocol,
    params) {
    super();
    this.body.conference = conference;
    this.body.endpointId = endpointId;
    this.body.transportProtocol = transportProtocol;
    this.body.params = params;
  }
}

module.exports = AllocateConnectionResources;
