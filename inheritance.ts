class Car {   
  Color:string     
  constructor(color:string) {   
     this.Color = color  
  }
  
  color(): void{
    console.log(`Car colour is ${this.Color}`);
  }
}

class Audi extends Car {   
   Price: number  
   constructor(color: string, price: number) {  
       super(color);  
       this.Price = price;  
   }  
   display():void {  
       console.log("Color of Audi car: " + this.Color);  
       console.log("Price of Audi car: " + this.Price);  
   }  
}

class R8 extends Audi {
  engine: string
  constructor(color: string, price: number, engine: string) {
    super(color, price);
    this.engine = engine;
  }

  myEngine(): void {
    console.log(`My engine is ${this.engine}`);
  }
}

let car1 = new Car("Red");
car1.color();
let obj = new Audi(" Black", 8500000 );  
obj.display();
obj.color();

let newCar = new R8("Silver", 123123123123, "asdasd")
newCar.myEngine()
newCar.display();
newCar.color();