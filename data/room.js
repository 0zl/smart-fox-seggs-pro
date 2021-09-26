'use strict'

module.exports = class SmartFoxSeggs_Room {
    constructor({
        id,
        name,
        maxUsers,
        maxSpectators,
        isTemp,
        isGame,
        isPrivate,
        isLimbo,
        userCount,
        specCount
    }) {
        this.data = {
            id,
            name,
            maxUsers,
            maxSpectators,
            isTemp,
            isGame,
            isPrivate,
            isLimbo,
            userCount,
            specCount,
            myPlayerIndex: 0,
            userList: new Map(),
            variables: []
        }
    }

    addUser(user, id) {
        this.data.userList.set(id, user)
        if (this.data.isGame && user.isSpectator)
            this.data.specCount++
        else
            this.data.userList++
    }

    removeUser(id) {
        this.data.userList.delete(id)
        if (this.data.isGame && user.isSpectator)
            this.data.specCount--
        else
            this.data.userList--
    }

    getUserList() {
        let t = []
        this.data.userList.forEach(x => t.push(x))
        return t
    }

    getUser(id) {
        // It's actually incomplete, should add handler if the id is string, search for the username instead.
        return this.data.userList.get(id)
    }

    clearUserList() {
        this.data.userList.clear()
        this.data.userList = 0
        this.data.specCount = 0
    }

    getVariable(vars) {
        return this.data.variables[vars]
    }

    getVariables() {
        return this.data.variables
    }

    setVariable(vars) {
        this.data.variables = vars
    }

    clearVariables() {
        this.data.variables = []
    }

    getName() {
        return this.data.name
    }

    getId() {
        return this.data.id
    }

    isTemp() {
        return this.data.isTemp
    }

    isGame() {
        return this.data.isGame
    }

    isPrivate() {
        return this.data.isPrivate
    }

    getUserCount() {
        return this.data.userCount
    }

    getSpectatorCount() {
        return this.data.specCount
    }

    getMaxUsers() {
        return this.data.maxUsers
    }

    getMaxSpectators() {
        return this.data.maxSpectators
    }

    setMyPlayerIndex(id) {
        this.data.myPlayerIndex = id
    }

    getMyPlayerIndex() {
        return this.data.myPlayerIndex
    }

    setIsLimbo(b) {
        this.data.isLimbo = b
    }

    isLimbo() {
        return this.data.isLimbo
    }

    setUserCount(n) {
        this.data.userCount = n
    }

    setSpectatorCount(n) {
        this.data.specCount = n
    }
}