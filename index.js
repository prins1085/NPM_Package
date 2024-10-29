#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const prompt = require('prompt-sync')({ sigint: true });

// Define the templates directory
const templatesDir = path.join(__dirname, 'templates');

// Get the list of available project structures
const getAvailableStructures = () => {
  return fs.readdirSync(templatesDir)
    .filter(item => fs.lstatSync(path.join(templatesDir, item)).isDirectory());
};

// Prompt user to select a project structure
const projectStructures = getAvailableStructures();
console.log('Select a project structure to install:');
projectStructures.forEach((structure, index) => {
  console.log(`${index + 1}: ${structure}`);
});

const choice = parseInt(prompt('Enter the number of your choice: '), 10);

// Validate user input
if (isNaN(choice) || choice < 1 || choice > projectStructures.length) {
  console.error('Invalid choice.');
  process.exit(1);
}

// Define source and destination directories
const selectedStructure = projectStructures[choice - 1];
const sourceDir = path.join(templatesDir, selectedStructure);
const destDir = process.cwd(); // Install in the current working directory

// Copy project structure files to the destination
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
  fs.readdirSync(src).forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Perform the copy operation
copyDirRecursive(sourceDir, destDir);

console.log(`Project structure ${selectedStructure} has been installed.`);
