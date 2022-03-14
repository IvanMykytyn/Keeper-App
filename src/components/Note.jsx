import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => (
  <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button onClick={() => props.removeNote(props.id)}>
      <DeleteIcon />
    </button>
  </div>
);

export default Note;
