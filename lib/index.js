"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

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

    this.alive = true;
    if (!Array.isArray(pins)) {
      pins = [pins];
    }
    this.pins = [];
    pins.map(function (pin) {
      var pin = getPinNumber(pin);
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
        this.alive = false;
        delete registeredPins[this.pin];
        this.emit("destroyed");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qk8sTUFBTSwyQkFBTSxRQUFROztJQUNsQixZQUFZLFdBQVEsYUFBYSxFQUFqQyxZQUFZOztBQUVyQixJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDOztJQUUxRCxVQUFVLFdBQVYsVUFBVTtBQUNWLFdBREEsVUFBVSxDQUNULElBQUk7OzswQkFETCxVQUFVOztBQUVuQixRQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixRQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN4QixVQUFJLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQztLQUNqQjtBQUNELFFBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUNoQixVQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUIsWUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLFVBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLHNCQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7T0FDL0I7QUFDRCxvQkFBYyxDQUFDLEdBQUcsQ0FBQyxRQUFPLENBQUM7S0FDNUIsQ0FBQyxDQUFDO0dBQ0o7O1lBZlUsVUFBVTs7dUJBQVYsVUFBVTtBQWdCckIsV0FBTzthQUFBLG1CQUFHO0FBQ1IsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsZUFBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLFlBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDeEI7Ozs7OztTQXBCVSxVQUFVO0dBQVMsTUFBTSxDQUFDLFlBQVkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgMjAxNCBCcnlhbiBIdWdoZXMgPGJyeWFuQHRoZW9yZXRpY2FsaWRlYXRpb25zLmNvbT4gKGh0dHA6Ly90aGVvcmV0aWNhbGlkZWF0aW9ucy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiovXG5cbmltcG9ydCBldmVudHMgZnJvbSAnZXZlbnRzJztcbmltcG9ydCB7IGdldFBpbk51bWJlciB9IGZyb20gJ3Jhc3BpLWJvYXJkJztcblxudmFyIHJlZ2lzdGVyZWRQaW5zID0gZ2xvYmFsLnJhc3BpUGluVXNhZ2UgPSBnbG9iYWwucmFzcGlQaW5Vc2FnZSB8fCB7fTtcblxuZXhwb3J0IGNsYXNzIFBlcmlwaGVyYWwgZXh0ZW5kcyBldmVudHMuRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IocGlucykge1xuICAgIHRoaXMuYWxpdmUgPSB0cnVlO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwaW5zKSkge1xuICAgICAgcGlucyA9IFsgcGlucyBdO1xuICAgIH1cbiAgICB0aGlzLnBpbnMgPSBbXTtcbiAgICBwaW5zLm1hcCgocGluKSA9PiB7XG4gICAgICB2YXIgcGluID0gZ2V0UGluTnVtYmVyKHBpbik7XG4gICAgICB0aGlzLnBpbnMucHVzaChwaW4pO1xuICAgICAgaWYgKHJlZ2lzdGVyZWRQaW5zW3Bpbl0pIHtcbiAgICAgICAgcmVnaXN0ZXJlZFBpbnNbcGluXS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICByZWdpc3RlcmVkUGluc1twaW5dID0gdGhpcztcbiAgICB9KTtcbiAgfVxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcbiAgICBkZWxldGUgcmVnaXN0ZXJlZFBpbnNbdGhpcy5waW5dO1xuICAgIHRoaXMuZW1pdCgnZGVzdHJveWVkJyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==