var url = 'http://mylogger.io/log';

function log(message) {
    //send http something
    console.log(message);
}

module.exports.log = log;