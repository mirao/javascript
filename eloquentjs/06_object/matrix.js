class MatrixIterator {
    constructor(matrix) {
      this.x = 0;
      this.y = 0;
      this.matrix = matrix;
    }
  
    next() {
      if (this.x == this.matrix.height) return {done: true};
  
      let value = {x: this.x,
                   y: this.y,
                   value: this.matrix.get(this.x, this.y)};
      this.y++;
      if (this.y == this.matrix.width) {
        this.y = 0;
        this.x++;
      }
      return {value, done: false};
    }
}

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
      this.width = width;
      this.height = height;
      this.content = [];
  
      for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
          this.content[x * width + y] = element(x, y);
        }
      }
    }
    
    [Symbol.iterator]() {
      return new MatrixIterator(this);
    }

    get(x, y) {
      return this.content[x * this.width + y];
    }
    set(x, y, value) {
      this.content[x * this.width + y] = value;
    }
  }
  
  class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
      super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }
  
  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix = new Matrix(3, 3, (x, y) => `value ${x},${y}`);
console.log("Universal matrix:")
for (let {x, y, value} of matrix) {
  console.log(x, y, value);
}
// → 0 0 value 0,0
// → 1 0 value 1,0
// → 0 1 value 0,1
// → 1 1 value 1,1

let symmatrix = new SymmetricMatrix(3, (x, y) => `${x},${y}`);
console.log("Symmetric matrix:")
for (let {x, y, value} of symmatrix) {
  console.log(x, y, value);
}
symmatrix.set(0, 1, "my");
console.log(symmatrix.get(0,1));
console.log(symmatrix.get(1,0));
