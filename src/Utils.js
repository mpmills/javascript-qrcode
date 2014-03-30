String.prototype.bytes = function () {
    'use strict';

    var bytes = [];

    var chars = this.toString().split('');

    for (var c = 0; c < chars.length; c += 1) {
        var char = chars[c];
        var charcode = chars[c].charCodeAt(0);
        var val = charcode.toString(16);

        while (val.length % 2) {
            val = '0' + val;
        }

        if (charcode > 128) {

            /* jshint bitwise: false */
            var l = charcode >>> 6;

            var r = parseInt(charcode.toString(2).replace(new RegExp('^' + l.toString(2)), ''), 2);

            l |= 192;
            r |= 128;
            /* jshint bitwise: true */

            bytes.push(l);
            bytes.push(r);
        }
        else {
            bytes.push(charcode);
        }
    }

    return bytes;
};

Array.prototype.parseInt = function (radix) {
    'use strict';

    radix = radix || 10;
    return this.map(function (e) {
        return parseInt(e, radix);
    });
};
