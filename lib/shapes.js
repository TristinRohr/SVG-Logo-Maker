class Shape {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area(shapeColor) {
        return `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area(shapeColor) {
        return `<rect x="70" y="20" width="160" height="160" fill="${shapeColor}" />`;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }

    area(shapeColor) {
        return `<polygon points="150,10 290,190 10,190" fill="${shapeColor}" />`;
    }
}

exports.Shape = Shape;
exports.Circle = Circle;
exports.Rectangle = Rectangle;
exports.Triangle = Triangle;
