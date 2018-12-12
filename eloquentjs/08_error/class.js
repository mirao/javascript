class Car {
    constructor(brand = "BMW", color = 'white') {
        this.brand = brand
        this.color = color
    }
}

let car1 = new Car();
let car2 = Car(); // TypeError: Class constructor Car cannot be invoked without 'new'