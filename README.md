# A client-side API library for communication with MCS-BFCP

# API specification
## Inbound requests (MCS-SIP -> MCS-BFCP)
- startBfcpConnection
     - @param {String} conference           MCS conference under which the endpoint is located
     - @param {String} endpointID           Unique endpoint ID (e.g. Call-ID)
     - @param {String} destinationIpAddress The IP address of the SIP Endpoint related to BFCP negotiation
     - @param {String} destinationPort      The port from where the SIP Endpoint wants to negotiate BFCP
     - @param {String} transportProtocol    Underlying protocol to be used by BFCP (UDP|TCP)
     - @param {String} floorControlRole     The role of the SIP Endpoint in the BFCP negotiation (client, server, client-server)
     - @param {String} setup                The direction of the connection. Either 'active', 'passive' or 'actpass'
     - @param {String} connectionState      The status of the connection, new or existing

- floorRequestResponse:
     - @param {String} conference
     - @param {String} endpointId
     - @param {Boolean} granted

- floorReleaseResponse:
     - @param {String} conference
     - @param {String} endpointId
     - @param {Boolean} released


## Outbound methods (MCS-BFCP -> MCS-SIP)
- startBfcpConnectionResponse
- floorRequestStatus
     - @param {String} conference
     - @param {String} endpointId
     - @param {Boolean} revoked
     
- floorRequest
     - @param {String} conference
     - @param {String} endpointId
- floorRelease
     - @param {String} conference
     - @param {String} endpointId

## Inbound and outbound events:
- stopBfcpConnectionRequest
     - @param {String} conference           MCS conference under which the endpoint is located
     - @param {String} endpointID           Unique endpoint ID (e.g. Call-ID)

 - stopBfcpConnectionResponse

# MCS methods regarding floor management
## Inbound methods
- setConferenceFloor: sets a media as conference floor. There's a transparent model linking to map this logic in the `Room` and `User` models to which the media refers to.
     - @param {String} roomId            MCS conference to which the floor logic refers
     - @param {String} mediaId           Media to be set as conference floor

- setContentFloor: sets a media as a content floor. There's a transparent model linking to map this logic in the `Room` and `User` models to which the media refers to.
     - @param {String} roomId            MCS conference to which the floor logic refers
     - @param {String} mediaId           Media to be set as conference floor

- getConferenceFloor:
     - @param {String} roomId            MCS conference to which the floor logic refers
     - @return {String} mediaId

- getContentFloor:
     - @param {String} roomId            MCS conference to which the floor logic refers
     - @return {String} mediaId

## MCS outbound events:
- conferenceFloorChanged: notifies that a new media has been made a conference floor.
     - @param {String} roomId            MCS conference to which the floor logic refers
     - @param {String} mediaId           New conference floor ID

- contentFloorChanged :notifies that a new media has been made a content floor.
     - @param {String} roomId            MCS conference to which the floor logic refers
     - @param {String} mediaId           New content floor ID for the aforementioned conference
