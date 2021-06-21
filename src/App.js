import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [note, setNote] = useState();
  const [notes, setNotes] = useState([]);
  const [isBeingEdited, setIsBeingEdited] = useState(null);
  const [contentEdited, setContentEdited] = useState('');
  const [search, setSearch] = useState('');

  function createNote(){
    let newNote = {
      title:,
      text:,
      id: new Date.getTime()
    };
  }

  function editNote(id){
    let editMe = [...notes].map((notes) => {
      if (note.id === id){
          note.text = contentEdited;
      };
      // why wont this work without the return
      return note;
    });
    setNotes(editMe);
    setContentEdited('');
    setIsBeingEdited(null);
  }

  function deleteNote(id){

  }

  function searchNotes(id){

  }

  return (
    <div className="App">

    <div>
      <header></header>
      {/*the text of the note transforms to an input when edit button clicked*/}
      { note.id !==== underGoingEditing ?  ( <p>{note.text}</p> ) :
      ( <div>
          <input type="text"
                 onChange={}
                 value={contentEdited}/>
          <button onClick={}>Submit</button>
        </div> )  }

      <button onClick={setIsBeingEdited(note.id)}>Edit</button>
      <button onClick={}>Delete</button>
    </div>
    </div>
  );
}

export default App;
