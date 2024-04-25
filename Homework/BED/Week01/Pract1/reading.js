const fs = require('node:fs');

const notes = '/Users/65886/OneDrive/Pictures/Documents/Homework/BED/Pract1/data.txt'

fs.readFile(notes, 'utf8', (err, data) =>{
    if (err) {
        console.error(err)
        return;
    }
    else{
        console.log(data)
    }
});