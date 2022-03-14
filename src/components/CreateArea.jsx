import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [noteInfo, setNoteInfo] = useState({
    title: "",
    content: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    setNoteInfo((prevNoteInfo) => {
      return {
        ...prevNoteInfo,
        [name]: value,
      };
    });
  };

  const [field, setField] = useState(false);

  const expandAria = () => {
    setField(true);
  };
  return (
    <div>
      <form className="create-note" onSubmit={(ev) => ev.preventDefault()}>
        <input
          onChange={handleInput}
          name="title"
          placeholder="Title"
          value={noteInfo.title}
          style={{ display: field ? "block" : "none" }}
        />
        <textarea
          onClick={expandAria}
          onChange={handleInput}
          name="content"
          placeholder="Take a note..."
          rows={field ? 3 : 1}
          value={noteInfo.content}
        />
        <Zoom in={field}>
          <Fab
            onClick={() => {
              props.addNewNote(noteInfo);
              setNoteInfo({
                title: "",
                content: "",
              });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
