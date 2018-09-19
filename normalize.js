// Using anonymous function with "this" passed as param to map()
function normalize1() {
    console.log(this.coords.map(function (n) { return n / this.length}, this));
}

// Using anonymous function with "this" bound to outer this
function normalize2() {
    console.log(this.coords.map(function (n) { return n / this.length}.bind(this)));
}

// Using anonymous function with length as a temporary var
function normalize3() {
    let length = this.length;
    console.log(this.coords.map(function (n) { return n / length}));
}

// Using arrow function
function normalize4() {
    console.log(this.coords.map(n => n / this.length));
}

normalize1.call({ coords: [0, 2, 3], length: 5 });
normalize2.call({ coords: [0, 2, 3], length: 5 });
normalize3.call({ coords: [0, 2, 3], length: 5 });
normalize4.call({ coords: [0, 2, 3], length: 5 });