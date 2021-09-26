'use strict'

module.exports = class SmartFoxSeggs_User {
    constructor(id, name) {
        this.id   = id
        this.name = name
        this.pId  = null
        this.variables = []
        this.isSpec = false
        this.isMod = false
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getVariable(varName) {
        return this.variables[varName]
    }

    getVariables() {
        return this.variables
    }

    setVariables(o) {
        this.variables.push(o)
    }

    clearVariables() {
        this.variables = []
    }

    setIsSpectator(b) {
        this.isSpec = b
    }

    isSpectator() {
        return this.isSpec
    }

    setModerator(b) {
        return this.isMod = b
    }

    isModerator() {
        return this.isMod
    }

    getPlayerId() {
        return this.pId
    }

    setPlayerId(id) {
        this.pId = id
    }
}