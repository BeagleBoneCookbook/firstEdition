#!/usr/bin/env node
// Test this
var b = require('bonescript');
var encoder = '';

function printStatus(x) {
    console.log('x.value = ' + x.value);
    console.log('x.err = ' + x.err);
}

function onEncoderReady(e) {
    if(e.event == 'return') {
        b.encoderRead(encoder, printStatus);
    }
}

b.encoderOpen(encoder, {}, onEncoderReady);
