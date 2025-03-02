class Shape {
  constructor(height, width, borderRadius, backgroundColor) {
    this.height = height;
    this.width = width;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor;
  }
}
const greenShape = new Shape(200, 100, 0, "green");
const redShape = new Shape(80, 80, 40, "red");

console.log(greenShape);
