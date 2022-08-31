import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { UnicornNotesContext } from "../context/UnicornNotesContext";
import Blueberry from "../models/Blueberry";
import UnicornNote from "../models/UnicornNote";
import {
  addBlueberry,
  deleteBlueberry,
  getBlueberriesById,
} from "../services/blueberriesService";
import "./SingleUnicornNote.css";

interface Props {
  unicornNote: UnicornNote;
}

const SingleUnicornNote = ({ unicornNote }: Props) => {
  const { user } = useContext(AuthContext);
  const { deleteUnicornNote } = useContext(UnicornNotesContext);
  const [blueberriesByNote, setBlueberriesByNote] = useState<Blueberry[]>([]);

  let likedByYou: boolean = false;
  let postedByYou: boolean = false;
  const blueberries: number = blueberriesByNote.length;

  const getAndSetBlueberries = (noteId: string) =>
    getBlueberriesById(noteId).then((response) =>
      setBlueberriesByNote(response)
    );

  useEffect(() => {
    getAndSetBlueberries(unicornNote._id!);
  }, []);

  const sendBlueberry = (blueberry: Blueberry): void => {
    addBlueberry(blueberry).then(() => getAndSetBlueberries(unicornNote._id!));
  };

  const removeBlueberry = (id: string, uid: string): void => {
    deleteBlueberry(id, uid).then(() => getAndSetBlueberries(unicornNote._id!));
  };

  if (user) {
    likedByYou = blueberriesByNote.some(
      (blueberry) => blueberry.uid === user.uid
    );
    postedByYou = unicornNote.uid === user.uid;
  }

  return (
    <li className="SingleUnicornNote">
      <h4>{unicornNote.title}</h4>
      {user && (
        <p className="from">
          - from <img src={unicornNote.userPhoto} alt="image" />
          {user!.uid === unicornNote.uid ? (
            <Link to="/user/personal">{unicornNote.by}</Link>
          ) : (
            <Link to={`/user/${unicornNote.uid}`}>{unicornNote.by}</Link>
          )}
        </p>
      )}
      <p className="comment">{unicornNote.text}</p>
      <div className="buttons">
        {likedByYou ? (
          <i
            className="fa-solid fa-circle-xmark"
            onClick={() => removeBlueberry(unicornNote._id!, user!.uid)}
          >{` ${blueberries}`}</i>
        ) : (
          <i
            className="fa-regular fa-circle-xmark"
            onClick={() =>
              sendBlueberry({ notesId: unicornNote._id!, uid: user!.uid })
            }
          >{` ${blueberries}`}</i>
        )}
        {postedByYou && (
          <i
            className="fa-solid fa-trash"
            onClick={() =>
              deleteUnicornNote(unicornNote._id!, blueberriesByNote)
            }
          ></i>
        )}
      </div>
    </li>
  );
};

export default SingleUnicornNote;
