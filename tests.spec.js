/*
The MIT License (MIT)

Copyright (c) 2014 Bryan Hughes <bryan@theoreticalideations.com> (http://theoreticalideations.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*global describe, it, expect */

var Peripheral = require('./lib/index.js').Peripheral;

describe('Peripheral Tests', function() {
  it('can create a peripheral', function() {
    var myPeripheral = new Peripheral(1);
    expect(myPeripheral.pin).toBe(1);
    expect(myPeripheral.alive).toBe(true);
    expect(global.raspiPinUsage[1]).toBe(myPeripheral);
  });

  it ('can create a new peripheral over the old one', function() {
    var myPeripheral = new Peripheral(1);
    expect(myPeripheral.pin).toBe(1);
    expect(myPeripheral.alive).toBe(true);
    expect(global.raspiPinUsage[1]).toBe(myPeripheral);

    var myOtherPeripheral = new Peripheral(1);
    expect(myPeripheral.pin).toBe(1);
    expect(myPeripheral.alive).toBe(false);
    expect(myOtherPeripheral.pin).toBe(1);
    expect(myOtherPeripheral.alive).toBe(true);
    expect(global.raspiPinUsage[1]).toBe(myOtherPeripheral);
  });
});