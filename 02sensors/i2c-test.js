#!/usr/bin/env node
# This uses the i2c method from npm what bonescript builds on
var i2c = require('i2c');
var address = 0x49;
var wire = new i2c(address, {device: '/dev/i2c-1', debug: false}); // point to your i2c address, debug provides REPL interface

wire.scan(function(err, data) {
  // result contains an array of addresses
  console.log(data);
});

// wire.writeByte(byte, function(err) {});

// wire.writeBytes(command, [byte0, byte1], function(err) {});

wire.readByte(function(err, res) { // result is single byte })
  console.log(err);
  console.log(res);
});

// wire.readBytes(command, length, function(err, res) {
//   // result contains a buffer of bytes
// });

// wire.on('data', function(data) {
//   // result for continuous stream contains data buffer, address, length, timestamp
// });

// wire.stream(command, length, delay); // continuous stream, delay in ms
