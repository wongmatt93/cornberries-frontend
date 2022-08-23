import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import UnicornNotesForm from "./UnicornNotesForm";
import UnicornNotesList from "./UnicornNotesList";
import "./UnicornsContainer.css";

const UnicornsContainer = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="UnicornsContainer">
      <h3>See What Others Are Saying About Unicorns</h3>
      {user ? <UnicornNotesForm /> : <p>Sign in to add your experience</p>}
      <UnicornNotesList />
    </section>
  );
};

export default UnicornsContainer;
