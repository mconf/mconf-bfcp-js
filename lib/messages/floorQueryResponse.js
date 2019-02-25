'use strict';

const BFCPMessage = require('./BFCPMessage');

class FloorQueryResponse extends BFCPMessage {
  constructor(
    conference,
    endpointId,
    floorId,
    params) {
    super();
    this.body.conference = conference;
    this.body.endpointId = endpointId;
    this.body.floorId = floorId;
    this.body.params = params;
  }
}

module.exports = FloorQueryResponse;
