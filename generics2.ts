class Collection<T> {
  private _things:T[];
  constructor() {
    this._things = [];
  }
  add(something: T): void {
    this._things.push(something);
  }
  get(index: number): T {
    return this._things[index];
  }
  printall(): void{
    console.log(this._things);
  }
};

let Stringss = new Collection<String>();
Stringss.add("Hello");
Stringss.add("world");

Stringss.printall();

let numbersss = new Collection<Number>();
numbersss.add(45);
numbersss.add(12);
numbersss.add("asdasd")
numbersss.printall();