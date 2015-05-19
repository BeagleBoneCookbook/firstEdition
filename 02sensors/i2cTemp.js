#!/usr/bin/env node

var b = require('bonescript');
var bus = '/dev/i2c-2'              // <1>
var TMP102 = 0x49;                  // <2>

b.i2cOpen(bus, TMP102);             // <3>
b.i2cReadByte(bus, onReadByte);     // <4>

function onReadByte(x) {            // <5>
    if (x.event == 'callback') {
        console.log('onReadByte: ' + JSON.stringify(x)); // <6>
        console.log(x.res*9/5+32 + 'F'); // <7>
    }
}
