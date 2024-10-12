import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      addNote({ id: Date.now(), text: noteText });
      setNoteText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Add a note..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NoteForm;
