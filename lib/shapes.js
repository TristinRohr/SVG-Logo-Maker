// Define the Shape class
class Shape {
    // Constructor to initialize x and y coordinates
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    // Method to move the shape by given x and y increments
    move(x, y) {
        this.x += x;
        this.y += y;
    }
}

// Define the Circle class, which extends Shape
class Circle extends Shape {
    // Constructor to initialize a circle with given radius
    constructor(radius) {
        super(); // Call the parent class constructor
        this.radius = radius; // Initialize the radius
    }

    // Method to compute the area of the circle and return SVG representation with given shape color
    area(shapeColor) {
        return `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
    }
}

// Define the Rectangle class, which extends Shape
class Rectangle extends Shape {
    // Constructor to initialize a rectangle with given width and height
    constructor(width, height) {
        super(); // Call the parent class constructor
        this.width = width; // Initialize the width
        this.height = height; // Initialize the height
    }

    // Method to compute the area of the rectangle and return SVG representation with given shape color
    area(shapeColor) {
        return `<rect x="70" y="20" width="160" height="160" fill="${shapeColor}" />`;
    }
}

// Define the Triangle class, which extends Shape
class Triangle extends Shape {
    // Constructor to initialize a triangle
    constructor() {
        super(); // Call the parent class constructor
    }

    // Method to compute the area of the triangle and return SVG representation with given shape color
    area(shapeColor) {
        return `<polygon points="150,10 290,190 10,190" fill="${shapeColor}" />`;
    }
}

// Export the classes for external use
module.exports = {
    Shape,
    Circle,
    Rectangle,
    Triangle
};
