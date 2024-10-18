//complete this code
class Rectangle {
	   constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive integers.");
    }
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate and return the area of the rectangle
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  // Constructor method accepting a single argument, side
  constructor(side) {
    super(side, side); // A square is a rectangle with equal width and height
  }

  // Method to calculate and return the perimeter of the square
  getPerimeter() {
    return 4 * this.width;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
