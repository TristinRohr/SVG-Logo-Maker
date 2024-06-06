// Importing necessary modules and classes for testing
const { Shape, Circle, Rectangle, Triangle } = require('./shapes');

// Test for the Shape class move method
test('Shape class move method', () => {
    // Creating a new instance of Shape
    const shape = new Shape();
    // Moving the shape
    shape.move(10, 5);
    // Asserting that the x and y coordinates are updated correctly
    expect(shape.x).toBe(10);
    expect(shape.y).toBe(5);
});

// Test for the Circle class area method
test('Circle class area method', () => {
    // Creating a new instance of Circle with radius 5
    const circle = new Circle(5);
    // Mock shape color for testing
    const shapeColor = "#ff0000";
    // Asserting that the area method returns the correct SVG representation of the circle with the specified color
    expect(circle.area(shapeColor)).toBe('<circle cx="150" cy="100" r="80" fill="#ff0000" />');
});

// Test for the Rectangle class area method
test('Rectangle class area method', () => {
    // Creating a new instance of Rectangle with width 10 and height 20
    const rectangle = new Rectangle(10, 20);
    // Mock shape color for testing
    const shapeColor = "#00ff00";
    // Asserting that the area method returns the correct SVG representation of the rectangle with the specified color
    expect(rectangle.area(shapeColor)).toBe('<rect x="70" y="20" width="160" height="160" fill="#00ff00" />');
});

// Test for the Triangle class area method
test('Triangle class area method', () => {
    // Creating a new instance of Triangle
    const triangle = new Triangle();
    // Mock shape color for testing
    const shapeColor = "#0000ff";
    // Asserting that the area method returns the correct SVG representation of the triangle with the specified color
    expect(triangle.area(shapeColor)).toBe('<polygon points="150,10 290,190 10,190" fill="#0000ff" />');
});
