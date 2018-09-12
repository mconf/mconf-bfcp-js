'use strict';

const BFCPMessage = require('./BFCPMessage');

class floorRequest extends BFCPMessage {
  constructor(
    conference,
    endpointId,
    params) {
    super();
    this.body.conference = conference;
    this.body.endpointId = endpointId;
    this.body.params = params;
  }
}

module.exports = floorRequest;