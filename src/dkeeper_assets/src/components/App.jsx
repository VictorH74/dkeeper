import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from "../../../declarations/dkeeper";

function App() {
  const [notes, setNotes] = useState([]);

  // Add
  function addNote(newNote) {

    setNotes((prevNotes) => {

      dkeeper.createNote(newNote.title, newNote.content);

      return [newNote,...prevNotes];
    });
  }

  useEffect( () => {
    fecthData();
  }, [] );

  async function fecthData() {
    const notesArray = await dkeeper.readNotes();
    setNotes(notesArray);
  }

  //Delete
  function deleteNote(id) {

    dkeeper.removeNote(id);

    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
    

    /*
    setInterval(() => {
      fecthData();
    }, 1000);
    */

  }

  return (
    <div>
      <Header />
      <CreateArea clickFunction={addNote} />

      {notes.map((note, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={note.title}
            content={note.content}
            clickFunction={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
