import { useContext, useEffect, useState } from "react";
import { UnicornNotesContext } from "../context/UnicornNotesContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "animate.css";

import SingleUnicornNote from "./SingleUnicornNote";
import "./UnicornNotesList.css";

const UnicornNotesList = () => {
  const [inProp, setInProp] = useState(false);

  const { unicornNotes, getAndSetUnicornNotes } =
    useContext(UnicornNotesContext);

  useEffect(() => {
    getAndSetUnicornNotes();
  }, []);

  useEffect(() => {
    setInProp(!inProp);
  }, [unicornNotes]);

  return (
    <div className="UnicornNotesList">
      <TransitionGroup component="ul">
        {unicornNotes.map((unicornNote) => (
          <CSSTransition
            key={unicornNote._id}
            classNames={{
              enterActive: "animate__animated animate__fadeIn",
              exitActive: "animate__animated animate__fadeOut",
            }}
            timeout={1000}
          >
            <SingleUnicornNote unicornNote={unicornNote} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default UnicornNotesList;
