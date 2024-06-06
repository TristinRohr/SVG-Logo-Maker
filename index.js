const inquirer = require('inquirer'); // Importing the inquirer package to prompt the user with questions
const fs = require('fs'); // Importing the fs module to perform file system operations
const { Circle, Rectangle, Triangle } = require('./lib/shapes.js'); // Importing the Shape classes from the shapes.js file

// Array of questions for the user
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:', // Prompt for the logo text
        validate: input => input.length <= 3 || 'Text must be up to three characters.', // Validation rule for the logo text
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):', // Prompt for the text color
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:', // Prompt for selecting a shape
        choices: ['circle', 'triangle', 'rectangle'], // Available shape options
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):', // Prompt for the shape color
    },
];

// Function to generate SVG content based on user answers
function generateSVG(answers) {
    let shape;
    switch (answers.shape.toLowerCase()) { // Convert the selected shape to lowercase for case-insensitive comparison
        case 'circle':
            shape = new Circle(); // Create a new Circle object
            break;
        case 'rectangle':
            shape = new Rectangle(); // Create a new Rectangle object
            break;
        case 'triangle':
            shape = new Triangle(); // Create a new Triangle object
            break;
        default:
            throw new Error('Invalid shape selected'); // Throw an error if an invalid shape is selected
    }

    // Construct SVG content with the chosen shape and text
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shape.area(answers.shapeColor)} <!-- Generate SVG shape based on the selected shape and color -->
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text> <!-- Add text to the SVG -->
            </svg>`;
}

// Prompt the user with the questions, generate SVG content based on answers, and write to file
inquirer.prompt(questions).then(answers => {
    const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, ''); // Generate a timestamp for unique filename
    const fileName = `./Examples/logo_${timestamp}.svg`; // Construct a unique filename for the SVG file
    const svgContent = generateSVG(answers); // Generate SVG content based on user answers
    fs.writeFileSync(fileName, svgContent); // Write the SVG content to a file with a unique filename
    console.log(`Generated ${fileName}`); // Log the filename of the generated SVG file
});
