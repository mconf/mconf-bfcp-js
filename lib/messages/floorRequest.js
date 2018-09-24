'use strict';

const BFCPMessage = require('./BFCPMessage');

class FloorRequest extends BFCPMessage {
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

module.exports = FloorRequest;