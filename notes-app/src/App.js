import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const updateNote = (id, updatedText) => {
    setNotes(notes.map(note => note.id === id ? { ...note, text: updatedText } : note));
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  );
}

export default App;
