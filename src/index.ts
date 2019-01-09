/*
The MIT License (MIT)

Copyright (c) 2014-2017 Bryan Hughes <bryan@nebri.us>

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

import { EventEmitter } from 'events';
import { getPinNumber } from 'raspi-board';
import { IPeripheral } from 'core-io-types';
import { setActivePeripheral } from 'raspi';

export class Peripheral extends EventEmitter implements IPeripheral {

  private _alive = true;
  public get alive() { return this._alive; }

  private _pins: number[] = [];
  public get pins() { return this._pins; }

  constructor(pins: string | number | Array<string | number>) {
    super();
    if (!Array.isArray(pins)) {
      pins = [ pins ];
    }
    for (const alias of pins) {
      const pin = getPinNumber(alias);
      if (pin === null) {
        throw new Error(`Invalid pin: ${alias}`);
      }
      this._pins.push(pin);
      setActivePeripheral(pin, this);
    }
  }

  public destroy() {
    if (this._alive) {
      this._alive = false;
      this.emit('destroyed');
    }
  }

  public validateAlive() {
    if (!this._alive) {
      throw new Error('Attempted to access a destroyed peripheral');
    }
  }
}
