const fs = require('fs');
const supportsColor = require('supports-color');
const chalk = require('chalk');

const content = 'new content';
const notes = '/Users/65886/OneDrive/Pictures/Documents/Homework/BED/Pract1/data.txt';

fs.writeFile(notes, content, err => {
    if (err) {
        console.error(err);
    } else {
        if (supportsColor.stdout) {
            console.log(chalk.greenBright("File written successfully"));
        } else {
            console.log("File written successfully");
        }
    }
});
