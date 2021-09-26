'use strict'

module.exports = {
    EXTHandler(msg, type, evt, constant) {
        let Params = {}

        switch (type) {
            case constant.XTMSG_TYPE_XML:
                // XML
                break
            case constant.XTMSG_TYPE_STR:
                Params.type    = type
                Params.dataObj = msg
                break
            case constant.XTMSG_TYPE_JSON:
                Params.type    = type
                Params.dataObj = msg.o
                break
        }

        evt.emit('onExtensionResponse', Params)
    }
}