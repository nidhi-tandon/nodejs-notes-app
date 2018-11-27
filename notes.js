//
//  addNote
//  firstNodeProject
//
//  Created by nidhitandon on 26/11/18 2:31 PM
//  Copyright © 2018 firstNodeProject. All rights reserved.
//
//  Keep up the good work :)
//

const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('note-data.json');
        return JSON.parse(notesString);
    } catch ( error ) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('note-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {

    console.log('addNote', title, body);
    let notes = fetchNotes();
    let note = {
        title,
        body
    };


    let duplicateNotes = notes.filter((note) => note.title === title);
    if ( duplicateNotes.length === 0 ) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getNote = (title) => {
    let notes = fetchNotes();
    let filteredNote = notes.filter((note) => note.title === title);
    return filteredNote[0];
};

let getAll = () => {
    return fetchNotes();
};
let removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};
module.exports = {
    addNote,
    getNote,
    getAll,
    removeNote
};