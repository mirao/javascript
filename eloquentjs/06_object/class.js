let Rectangle = class {
    constructor(height = 50, width = 30) {
        this.height = height;
        this.width = width;
    }

    getHeight() {
        return this.height;
    }

};

Rectangle.PI = 3.14;
Rectangle.prototype.color = 'white';

// Create two rectangles
let rect1 = new Rectangle(99,98);
let rect2 = new Rectangle();

rect1.height = 10;
console.log(rect1.getHeight());
console.log(rect1.color);
console.log(Rectangle.PI);
// Override toString() for object
rect2.toString = function () { return `${this.height} x ${this.width}`;};
console.log(rect2.toString());
this.height = 1;
this.width = 2;
// Override toString() for class
Rectangle.prototype.toString = () => { return `${this.height}h x ${this.width}w`;}; // arrow function: "this" = outer this
console.log(rect1.toString());
Rectangle.prototype.toString = function() { return `${this.height}h x ${this.width}w`;}; // classic function: "this" = prototype's this
console.log(rect1.toString());
console.log(rect2.toString());
