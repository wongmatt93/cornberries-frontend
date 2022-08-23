import { useContext, useEffect } from "react";
import { UnicornNotesContext } from "../context/UnicornNotesContext";

import SingleUnicornNote from "./SingleUnicornNote";
import "./UnicornNotesList.css";

const UnicornNotesList = () => {
  const { unicornNotes, getAndSetUnicornNotes } =
    useContext(UnicornNotesContext);

  useEffect(() => {
    getAndSetUnicornNotes();
  }, []);

  return (
    <ul className="UnicornNotesList">
      {unicornNotes.map((unicornNote) => (
        <SingleUnicornNote key={unicornNote._id} unicornNote={unicornNote} />
      ))}
    </ul>
  );
};

export default UnicornNotesList;
