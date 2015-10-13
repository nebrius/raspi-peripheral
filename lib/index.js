"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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

var events = _interopRequire(require("events"));

var getPinNumber = require("raspi-board").getPinNumber;

var registeredPins = global.raspiPinUsage = global.raspiPinUsage || {};

var Peripheral = exports.Peripheral = (function (_events$EventEmitter) {
  function Peripheral(pins) {
    var _this = this;

    _classCallCheck(this, Peripheral);

    _get(Object.getPrototypeOf(Peripheral.prototype), "constructor", this).call(this);
    this.alive = true;
    if (!Array.isArray(pins)) {
      pins = [pins];
    }
    this.pins = [];
    pins.map(function (alias) {
      var pin = getPinNumber(alias);
      if (pin === null) {
        throw new Error("Invalid pin: " + alias);
      }
      _this.pins.push(pin);
      if (registeredPins[pin]) {
        registeredPins[pin].destroy();
      }
      registeredPins[pin] = _this;
    });
  }

  _inherits(Peripheral, _events$EventEmitter);

  _prototypeProperties(Peripheral, null, {
    destroy: {
      value: function destroy() {
        if (this.alive) {
          this.alive = false;
          for (var i = 0; i < this.pins.length; i++) {
            delete registeredPins[this.pins[i]];
          }
          this.emit("destroyed");
        }
      },
      writable: true,
      configurable: true
    },
    validateAlive: {
      value: function validateAlive() {
        if (!this.alive) {
          throw new Error("Attempted to access a destroyed peripheral");
        }
      },
      writable: true,
      configurable: true
    }
  });

  return Peripheral;
})(events.EventEmitter);

Object.defineProperty(exports, "__esModule", {
  value: true
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCTyxNQUFNLDJCQUFNLFFBQVE7O0lBQ2xCLFlBQVksV0FBUSxhQUFhLEVBQWpDLFlBQVk7O0FBRXJCLElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7O0lBRTVELFVBQVUsV0FBVixVQUFVO0FBQ1YsV0FEQSxVQUFVLENBQ1QsSUFBSTs7OzBCQURMLFVBQVU7O0FBRW5CLCtCQUZTLFVBQVUsNkNBRVg7QUFDUixRQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixRQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN4QixVQUFJLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQztLQUNqQjtBQUNELFFBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssRUFBSztBQUNsQixVQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsVUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO0FBQ2hCLGNBQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDO09BQzFDO0FBQ0QsWUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLFVBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLHNCQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7T0FDL0I7QUFDRCxvQkFBYyxDQUFDLEdBQUcsQ0FBQyxRQUFPLENBQUM7S0FDNUIsQ0FBQyxDQUFDO0dBQ0o7O1lBbkJVLFVBQVU7O3VCQUFWLFVBQVU7QUFvQnJCLFdBQU87YUFBQSxtQkFBRztBQUNSLFlBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNkLGNBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLGVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxtQkFBTyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1dBQ3JDO0FBQ0QsY0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN4QjtPQUNGOzs7O0FBQ0QsaUJBQWE7YUFBQSx5QkFBRztBQUNkLFlBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2YsZ0JBQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtPQUNGOzs7Ozs7U0FqQ1UsVUFBVTtHQUFTLE1BQU0sQ0FBQyxZQUFZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIDIwMTQgQnJ5YW4gSHVnaGVzIDxicnlhbkB0aGVvcmV0aWNhbGlkZWF0aW9ucy5jb20+IChodHRwOi8vdGhlb3JldGljYWxpZGVhdGlvbnMuY29tKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgZXZlbnRzIGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRQaW5OdW1iZXIgfSBmcm9tICdyYXNwaS1ib2FyZCc7XG5cbmNvbnN0IHJlZ2lzdGVyZWRQaW5zID0gZ2xvYmFsLnJhc3BpUGluVXNhZ2UgPSBnbG9iYWwucmFzcGlQaW5Vc2FnZSB8fCB7fTtcblxuZXhwb3J0IGNsYXNzIFBlcmlwaGVyYWwgZXh0ZW5kcyBldmVudHMuRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IocGlucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hbGl2ZSA9IHRydWU7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBpbnMpKSB7XG4gICAgICBwaW5zID0gWyBwaW5zIF07XG4gICAgfVxuICAgIHRoaXMucGlucyA9IFtdO1xuICAgIHBpbnMubWFwKChhbGlhcykgPT4ge1xuICAgICAgY29uc3QgcGluID0gZ2V0UGluTnVtYmVyKGFsaWFzKTtcbiAgICAgIGlmIChwaW4gPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBpbjogJyArIGFsaWFzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGlucy5wdXNoKHBpbik7XG4gICAgICBpZiAocmVnaXN0ZXJlZFBpbnNbcGluXSkge1xuICAgICAgICByZWdpc3RlcmVkUGluc1twaW5dLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHJlZ2lzdGVyZWRQaW5zW3Bpbl0gPSB0aGlzO1xuICAgIH0pO1xuICB9XG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuYWxpdmUpIHtcbiAgICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5waW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRlbGV0ZSByZWdpc3RlcmVkUGluc1t0aGlzLnBpbnNbaV1dO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KCdkZXN0cm95ZWQnKTtcbiAgICB9XG4gIH1cbiAgdmFsaWRhdGVBbGl2ZSgpIHtcbiAgICBpZiAoIXRoaXMuYWxpdmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGVkIHRvIGFjY2VzcyBhIGRlc3Ryb3llZCBwZXJpcGhlcmFsJyk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=