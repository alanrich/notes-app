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
  const [searchResults, setSearchResults] = useState([]);

  function createNote(){
    let newNote = {
      title:{noteTitle},
      text:{note},
      id: new Date.getTime()
    };
    setNotes([...notes].cocncat(newNote));
    // think about the necessity of these two lines
    setNote('');
    setNoteTitle('');
  }

  function editNote(id){
    let editedNotes = [...notes].map((notes) => {
      if (note.id === id){
          note.text = contentEdited;
      };
      // think about why this func requires the return
      return note;
    });
    setNotes(editedNotes);
    setContentEdited('');
    setIsBeingEdited(null);
  }

  function deleteNote(id){
    let editedNotes = [...notes].filter((note) => note.id !=== id);
    setNotes(editedNotes);
  }

  const searchNotes = (inputText) => {
    let results = [...notes].filter((note) => note.text.includes(inputText));
    setSearchResults(results)
  }

  function closeSearchResults(){
    //logic to close a modal
    setSearchResults([])
  }

  return (
  <div className="App">

{/********************* The Search Bar ********************/}
      <form action="" onSubmit={searchNotes}>
        <input type="text"
               placeholder='search'
               onChange={(e) => searchNotes(e.target.value)}/>
        <button>Search</button>
      </form>

{/********************* Create a Note ********************/}
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

{/*************************** Displayed Notes **************************/}
    <div className='notesWrapper'>

      { notes.map((note) =>

          <div className='note'>
            <h1 className='noteTitle'>{note.title}</h1>
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

{/*********************** Search Results Modal *************************/}
    <div className='searchResultsModal'>

      { searchResults.map((note) =>

        <div className='note'>
          <h1 className='noteTitle'>{note.title}</h1>
          { note.id !==== isBeingEditing ?  ( <p>{note.text}</p> ) :
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
