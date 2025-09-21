

// in node we have in built module called fs(file system)
// we can use this module to perform file handling operations like create, read, update, delete files 

const fs = require('fs');

// create a new file
// sync means synchronous 
fs.writeFileSync('./hello1.txt', 'How are you ishan?'); 

// async means asynchronous
fs.writeFile("./hello2.txt", "I am fine", (err) => {
    // console.log("File created");
    
});

// apppend data to a file 
fs.appendFile('./hello1.txt', ' I am good', (err) => {
    // console.log("File updated");
});

// read a file
// utf-8 is used to convert binary data to text
// scynchronous way  always return some value
const data = fs.readFileSync('./hello1.txt', 'utf-8');
// console.log(data);

// asynchronous way will not return any value we have to use callback function to get the value
fs.readFile('./hello2.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
