import React from 'react';

function NoteList({ notes, deleteNote, updateNote }) {
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          {note.text}
          <button onClick={() => deleteNote(note.id)}>Delete</button>
          <button onClick={() => {
            const updatedText = prompt("Update note:", note.text);
            if (updatedText) {
              updateNote(note.id, updatedText);
            }
          }}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
