import "./UnicornNotesForm.css";
import Modal from "react-modal";
import React, { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { UnicornNotesContext } from "../context/UnicornNotesContext";

Modal.setAppElement("#root");

const UnicornNotesForm = () => {
  const { submitUnicornNote } = useContext(UnicornNotesContext);
  const { user } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const openModal = (): void => setIsOpen(true);

  const closeModal = (): void => setIsOpen(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    submitUnicornNote({
      title,
      by: user!.displayName!,
      text,
      uid: user!.uid,
      userPhoto: user!.photoURL!,
    });
    setTitle("");
    setText("");
    closeModal();
  };

  return (
    <div className="UnicornNotesForm">
      <button onClick={openModal}>Add your experience</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="UnicornNotesFormOverlay"
        className="UnicornNotesFormModal"
      >
        <p className="share-exp">Share Your Experience</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="by">By:</label>
          <input
            type="text"
            name="by"
            id="by"
            value={user!.displayName!}
            readOnly
          />
          <label htmlFor="comment">Comment:</label>
          <textarea
            name="comment"
            id="comment"
            cols={30}
            rows={10}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button>Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default UnicornNotesForm;
