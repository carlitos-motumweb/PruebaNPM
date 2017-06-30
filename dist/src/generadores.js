"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fibonacci_simple;
function fibonacci_simple() {
    var a = 0;
    var b = 1;
    return {
        next: function next(reset) {
            if (reset) {
                a = 0;
                b = 1;
            }
            var f = a;
            a = b;
            b = f + a;
            var resp = {
                value: f,
                done: false
            };
            return resp;
        }
    };
}