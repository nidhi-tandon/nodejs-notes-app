//
//  server
//  firstNodeProject
//
//  Created by nidhitandon on 23/11/18 2:59 PM
//  Copyright © 2018 firstNodeProject. All rights reserved.
//
//  Keep up the good work :)
//


/*server.js*/

const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash');

const notes = require('./notes');

const argv = yargs
  .command('add', 'add new note', {
      title: {
          describe: 'Title of note',
          demand: true,
          alias: 't'
      },
      body: {
          describe: 'Body of note',
          demand: true,
          alias: 'b'
      }
  })
  .help()
  .argv;
let command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if ( command === 'list' ) {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes`);
    allNotes.forEach((note) => console.log(note))
} else if ( command === 'add' ) {

    let note = notes.addNote(argv.title, argv.body);
    if ( note ) {
        console.log(`note added with title: ${note.title} and body: ${note.body}`)
    }
    else {
        console.log('note with this title already exists')
    }

} else if ( command === 'remove' ) {

    let noteRemoved = notes.removeNote(argv.title);
    let message = !noteRemoved ? 'Note removed' : 'Note not found.'
    console.log(message);

} else if ( command === 'read' ) {

    let note = notes.getNote(argv.title);
    if ( note ) {
        console.log('Note found');
    }
    else {
        console.log('Note not found');
    }
}
else {
    console.log('command not found.')
}

