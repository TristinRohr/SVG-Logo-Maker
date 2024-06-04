const { Shape, Circle, Rectangle, Triangle } = require('./shapes');

test('Shape class move method', () => {
    const shape = new Shape();
    shape.move(10, 5);
    expect(shape.x).toBe(10);
    expect(shape.y).toBe(5);
});

test('Circle class area method', () => {
    const circle = new Circle(5);
    const shapeColor = "#ff0000"; // Mock shapeColor for testing
    expect(circle.area(shapeColor)).toBe('<circle cx="150" cy="100" r="80" fill="#ff0000" />');
});

test('Rectangle class area method', () => {
    const rectangle = new Rectangle(10, 20);
    const shapeColor = "#00ff00"; // Mock shapeColor for testing
    expect(rectangle.area(shapeColor)).toBe('<rect x="70" y="20" width="160" height="160" fill="#00ff00" />');
});

test('Triangle class area method', () => {
    const triangle = new Triangle();
    const shapeColor = "#0000ff"; // Mock shapeColor for testing
    expect(triangle.area(shapeColor)).toBe('<polygon points="150,10 290,190 10,190" fill="#0000ff" />');
});
