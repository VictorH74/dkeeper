import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function updateInputData(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            onChange={updateInputData}
            name="title"
            value={note.title}
            placeholder="Title"
          />
        ) : (
          ""
        )}

        <textarea
          onChange={updateInputData}
          onClick={() => setIsExpanded(true)}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />

        <Zoom in={isExpanded ? true : false}>
          <Fab
            onClick={(event) => {
              props.clickFunction(note);
              setNote({
                title: "",
                content: ""
              });
              setIsExpanded(false);
              event.preventDefault();
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
