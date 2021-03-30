var Collection = /** @class */ (function () {
    function Collection() {
        this._things = [];
    }
    Collection.prototype.add = function (something) {
        this._things.push(something);
    };
    Collection.prototype.get = function (index) {
        return this._things[index];
    };
    Collection.prototype.printall = function () {
        console.log(this._things);
    };
    return Collection;
}());
var Stringss = new Collection();
Stringss.add("Hello");
Stringss.add("world");
Stringss.printall();
var numbersss = new Collection();
numbersss.add(45);
numbersss.add(12);
numbersss.printall();
