"use strict";
exports.__esModule = true;
exports.Product = void 0;
var priceCalc_1 = require("./priceCalc");
var Product = /** @class */ (function () {
    function Product(name, price, tax, discount) {
        this.name = name;
        this.price = price;
        this.tax = tax;
        this.discount = discount;
    }
    Product.prototype.totalPrice = function () {
        return priceCalc_1.PriceCalc.totalPrice(this.price, this.tax, this.discount);
    };
    return Product;
}());
exports.Product = Product;
