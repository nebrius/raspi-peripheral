Raspi Peripheral
================

This module provides the base class for other raspi peripherals. Peripherals for use within the raspi ecosystem should extend this base class. This class provides management of pins and ensures that only one peripheral can be active on any given pin at one time.

## Example

```JavaScript
import { Peripheral } = from 'raspi-peripheral';

class MyPeripheral extends Peripheral {
  write(value) {
    if (this.alive) {
      // Do stuff
    }
  }
}
```

Raspi Peripheral is written in ECMAScript 6, so creating your peripheral in ECMAScript 6 is easiest, but you can also do it in ECMAScript 5:

```JavaScript
var Peripheral = require('raspi-peripheral').Peripheral;

function MyPeripheral(pin) {
  Peripheral.call(this, pin);
}
util.inherits(MyPeripheral, Peripheral);

MyPeripheral.prototype.write = function(value) {
  if (this.alive) {
    // Do stuff
  }
};
```

## API

### _constructor_(pin)

The base constructor must be called with a single argument, the pin to use.

### _instance_.pin

The pin that the peripheral was initialized with

### _instance_.alive

Whether or not the pin is "alive". A dead pin means that the user initialized a new peripheral on the same pin as this peripheral. You should always make sure to query "alive" before performing any work.

### _instance_.destroy()

This method "destroys" the pin. Destroying a pin sets the alive flag to false and emits a "destroy" event. The ```destroy``` method is automatically called whenever a new peripheral is initialized over another peripheral.

## Example gulpfile for compiling to ECMAScript 6

If you want to use ECMAScript 6 for your peripheral, here is an example gulpfile:
 
```JavaScript
var gulp = require('gulp');
var traceur = require('gulp-traceur');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

gulp.task('default', function() {
  return gulp.src('index.js')
    .pipe(sourcemaps.init())
      .pipe(traceur({
        modules: 'commonjs'
      }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('lib'));
});

gulp.task('clean', function(cb) {
  del(['lib/index.js'], cb);
});
```

This gulpfile assumes you have a single source file called ```index.js```. Note that the traceur runtime is loaded automatically by the Raspi Peripheral module, so there is no need to do it in your module.

License
=======

The MIT License (MIT)

Copyright (c) 2014 Bryan Hughes bryan@theoreticalideations.com (https://theoreticalideations.com)

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
