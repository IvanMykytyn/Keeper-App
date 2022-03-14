import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const removeNote = (noteId) => {
    setNotes(notes.filter((note, id) => noteId !== id));
  };

  return (
    <div>
      <Header />
      <CreateArea addNewNote={addNote} />
      <div className="notes">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            removeNote={removeNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
