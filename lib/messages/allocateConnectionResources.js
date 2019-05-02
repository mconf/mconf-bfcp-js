'use strict';

const BFCPMessage = require('./BFCPMessage');

class AllocateConnectionResources extends BFCPMessage {
  constructor(
    conference,
    transportProtocol,
    params) {
    super();
    this.body.conference = conference;
    this.body.transportProtocol = transportProtocol;
    this.body.params = params;
  }
}

module.exports = AllocateConnectionResources;
