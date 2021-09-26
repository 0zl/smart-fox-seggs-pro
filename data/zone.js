'use strict'

const Room = require('./room')

module.exports = class SmartFoxSeggs_Zone {
    constructor(name) {
        this.name     = name
        this.roomList = []
    }

    getRoom(id) {
        return new Room(roomList[id])
    }

    getRoomByName(name) {
        // later
    }
}