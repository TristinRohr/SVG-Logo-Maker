const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Rectangle, Triangle } = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: input => input.length <= 3 || 'Text must be up to three characters.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'rectangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):',
    },
];

function generateSVG(answers) {
    let shape;
    switch (answers.shape.toLowerCase()) {
        case 'circle':
            shape = new Circle();
            break;
        case 'rectangle':
            shape = new Rectangle();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
        default:
            throw new Error('Invalid shape selected');
    }

    return `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                ${shape.area(answers.shapeColor)}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
            </svg>`;
}

inquirer.prompt(questions).then(answers => {
    const svgContent = generateSVG(answers);
    fs.writeFileSync('./Examples/logo.svg', svgContent);
    console.log('Generated logo.svg');
});
