import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [noteTitle, setNoteTitle] = useState('');
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [isBeingEdited, setIsBeingEdited] = useState(null);
  const [contentEdited, setContentEdited] = useState('');
  const [search, setSearch] = useState('');

  function createNote(){
    let newNote = {
      title:{noteTitle},
      text:{note},
      id: new Date.getTime()
    };
    setNotes([...notes].cocncat(newNote));
    setNote('');
    setNoteTitle('');
  }

  function editNote(id){
    let editMe = [...notes].map((notes) => {
      if (note.id === id){
          note.text = contentEdited;
      };
      // why wont this work without the return
      return note;
    });
    setNote(editMe);
    setContentEdited('');
    setIsBeingEdited(null);
  }

  function deleteNote(id){

  }

  function searchNotes(id){

  }

  return (
  <div className="App">



      <form action="" onSubmit={createNote}>
        <input type="text"
              placeholder='title'
              onChange={(e) => setNoteTitle(e.target.value)}
              value={noteTitle}/>
        <input type="text"
               placeholder='note'
               onChange={(e) => setNote(e.target.value)}
               value={note}/>
        <button onClick={createNote}>New Note</button>
      </form>


    <div className='notesWrapper'>

      { notes.map((note) =>

          <div className='note'>
            <header className='noteTitle'>{note.title}</header>
            { note.id !==== underGoingEditing ?  ( <p>{note.text}</p> ) :
            ( <div>
              <input type="text"
                  onChange={(e) => setNote(e.target.value)}
                  value={contentEdited}/>
                  <button onClick={}>Submit</button>
              </div> )  }

              <button onClick={setIsBeingEdited(note.id)}>Edit</button>
              <button onClick={deleteNote(note.id)}>Delete</button>
          </div>

      )}

    </div>
  </div>
}

export default App;
