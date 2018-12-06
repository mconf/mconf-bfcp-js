'use strict';

const BFCPMessage = require('./BFCPMessage');

class StartBFCPConnection extends BFCPMessage {
  constructor(
    conference,
    endpointId,
    destinationIpAddress,
    destinationPort,
    transportProtocol,
    floorControlRole,
    setup,
    caller,
    params) {
    super();
    this.body.conference = conference;
    this.body.endpointId = endpointId;
    this.body.destinationIpAddress = destinationIpAddress;
    this.body.destinationPort = destinationPort;
    this.body.transportProtocol = transportProtocol;
    this.body.floorControlRole = floorControlRole;
    this.body.setup = setup;
    this.body.caller = caller;
    this.body.params = params;
  }
}

module.exports = StartBFCPConnection;
