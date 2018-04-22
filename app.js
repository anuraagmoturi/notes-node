const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
// const os = require('os');
const notes = require('./notes');

//var user = os.userInfo();
//console.log(user);

// fs.appendFile('greetings.txt',`Hello ${user.username}! you are ${notes.age}`,function (err) {
//   if(err){
//     console.log('unable to write to file');
//   }
// });

const titleOptions ={
  describe: 'Tile of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
    .command('add','Add a new note',{
      title: titleOptions,
      body: bodyOptions
    })
    .command('list','List all notes')
    .command('read','Read a note',{
      title: titleOptions
    })
    .help()
    .argv;
var command = process.argv[2];


if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log("Note created");
    notes.logNote(note);
  }else {
    console.log("Duplicate Note")
  }
}else if(command === 'list'){
 var allNotes = notes.getAll();
 console.log(`Printing ${allNotes.length} note(s).`);
 allNotes.forEach(note => notes.logNote(note));

}else if(command === 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Note found');
    notes.logNote(note);
  }else{
    console.log("Note not found");
  }
}else if(command === 'remove'){
  var removed = notes.removeNote(argv.title);
  var message = removed ? 'Note was removed' : 'Note notm found';
  console.log(message);

}else{
  console.log('Commmand not recognized');
}


