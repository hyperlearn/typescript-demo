"use strict";
exports.__esModule = true;
exports.PriceCalc = void 0;
var PriceCalc;
(function (PriceCalc) {
    function totalPrice(cost, tax, discount) {
        if (discount === void 0) { discount = 0; }
        return (cost + tax - discount);
    }
    PriceCalc.totalPrice = totalPrice;
})(PriceCalc = exports.PriceCalc || (exports.PriceCalc = {}));
