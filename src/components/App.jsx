import React from "react";
import notes from "../notes";

import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";

const App = () => (
  <div>
    <Heading />
    {notes.map((note) => (
      <Note key={note.key} title={note.title} content={note.content} />
    ))}
    <Footer />
  </div>
);

export default App;
