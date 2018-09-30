const EventEmitter = require('events');
const emitter = new EventEmitter();

var testURL = 'http://mylogger.io/log';

function log(message) {
    console.log(message);

    emitter.emit('logging', { planet: 'earth', location: 3});

}

module.exports.log = log;