#!/usr/bin/env node
// Not working as for 28-Mar-2014
var b = require('bonescript');
var port = '/dev/i2c-2'

b.i2cOpen(port, null, {}, onI2C);

function onI2C(x) {
    console.log('onI2C: ' + JSON.stringify(x));
    if (x.event == 'return') {
        b.i2cScan(port, onScan);
    }
}

function onScan(x) {
    if (x.event == 'callback') {
        console.log('scan data: ' + JSON.stringify(x));
    }
}
