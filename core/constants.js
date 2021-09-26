'use strict'

// Store this somewhere inside variable, uh
module.exports = () => ({
    EOM: 0x00,
    MSG_XML: '<',
    MSG_JSON: '{',
    MSG_STR: '%',
    MIN_POLL_SPEED: 0,
    DEFAULT_POLL_SPEED: 750,
    MAX_POLL_SPEED: 10000,
    HTTP_POLL_REQUEST: 'poll',
    MODMSG_TO_USER: 'u',
    MODMSG_TO_ROOM: 'r',
    MODMSG_TO_ZONE: 'z',
    XTMSG_TYPE_XML: 'xml',
    XTMSG_TYPE_STR: 'str',
    XTMSG_TYPE_JSON: 'json',
    CONNECTION_MODE_DISCONNECTED: 'disconnected',
    CONNECTION_MODE_SOCKET: 'socket',
    CONNECTION_MODE_HTTP: 'http'
})