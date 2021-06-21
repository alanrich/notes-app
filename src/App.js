import React from 'react';
import { useState } from 'react';
//import { MdSearch } from 'react-icons/md';
//import { MdDeleteForever } from 'react-icons/md';

const App = () => {

  const [noteTitle, setNoteTitle] = useState('');
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [isBeingEdited, setIsBeingEdited] = useState(null);
  const [contentEdited, setContentEdited] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function createNote(e){
    e.preventDefault();
    let newNote = {
      title:noteTitle,
      text:note,
      id: new Date().getTime()
    };
    setNotes([...notes].concat(newNote));
    // ponder the necessity of these two lines
    setNote('');
    setNoteTitle('');
  }

  function editNote(id){
    let editedNotes = [...notes].map((notes) => {
      if (note.id === id){
          note.text = contentEdited;
      };
      // ponder the necessity of the return
      return note;
    });
    setNotes(editedNotes);
    setContentEdited('');
    setIsBeingEdited(null);
  }

  function deleteNote(id){
    let editedNotes = [...notes].filter((note) => (note.id !== id));
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

{/********************* Creates a Note ********************/}
      <form action="" onSubmit={createNote}>
        <input type="text"
              placeholder='title'
              onChange={(e) => setNoteTitle(e.target.value)}
              value={noteTitle}/>
        <input type="text"
               placeholder='note'
               onChange={(e) => setNote(e.target.value)}
               value={note}/>
        <button>New Note</button>
      </form>

{/*************************** Displayed Notes **************************/}
    <div className='notesWrapper'>

      { notes.map((note) =>

          <div className='note'>
            <h1 className='noteTitle'>{note.title}</h1>
            { note.id !== isBeingEdited ?  ( <p>{note.text}</p> ) :
            ( <div>
              <input type="text"
                  onChange={(e) => setNote(e.target.value)}
                  value={contentEdited}/>
                  <button onClick={editNote(note.id)}>Submit</button>
              </div> )  }

              <button onClick={setIsBeingEdited(note.id)}>Edit</button>
              <button onClick={deleteNote(note.id)}>Delete</button>
          </div>

      )}

    </div>

{/*********************** Search Results Modal *************************/}
    <div className='search'>
      <div className='search-icons' size='1.3em'>
      { searchResults.map((note) =>

        <div className='note'>
          <h1 className='noteTitle'>{note.title}</h1>
          { note.id !== isBeingEdited ?  ( <p>{note.text}</p> ) :
          ( <div>
            <input type="text"
                onChange={(e) => setNote(e.target.value)}
                value={contentEdited}/>
                <button onClick={editNote(note.id)}>Submit</button>
            </div> )  };

            <button onClick={setIsBeingEdited(note.id)}>Edit</button>
            <button onClick={deleteNote(note.id)}>Delete</button>
        </div>

      )}

        <button onClick={closeSearchResults}>Close</button>
      </div>
    </div>
{/**********************************************************************/}
  </div>
)};

export default App;
