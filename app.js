console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
// const os = require('os');
const notes = require('./notes');

//var user = os.userInfo();
//console.log(user);

// fs.appendFile('greetings.txt',`Hello ${user.username}! you are ${notes.age}`,function (err) {
//   if(err){
//     console.log('unable to write to file');
//   }
// });

var command = process.argv[2];

console.log(process.argv);
if(command === 'add'){
  console.log('Adding new note');
}else if(command === 'list'){
  console.log('Listing all notes');
}else if(command === 'read'){
  console.log('Reading note');
}else if(command === 'remove'){
  console.log('Removing note');
}else{
  console.log('Commmand not recognized');
}


