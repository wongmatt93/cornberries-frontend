import { ReactNode, useState } from "react";
import Blueberry from "../models/Blueberry";
import UnicornNote from "../models/UnicornNote";
import { deleteBlueberry } from "../services/blueberriesService";
import {
  deleteUnicornNoteById,
  getUnicornNotes,
  postUnicornNote,
} from "../services/unicornNotesService";
import { UnicornNotesContext } from "./UnicornNotesContext";

interface Props {
  children: ReactNode;
}

export const UnicornNotesContextProvider = ({ children }: Props) => {
  const [unicornNotes, setUnicornNotes] = useState<UnicornNote[]>([]);

  const getAndSetUnicornNotes = (): void => {
    getUnicornNotes().then((response) => setUnicornNotes(response.reverse()));
  };

  const submitUnicornNote = (UnicornNote: UnicornNote): void => {
    postUnicornNote(UnicornNote).then(() => getAndSetUnicornNotes());
  };

  const deleteUnicornNote = (id: string, blueberries: Blueberry[]): void => {
    blueberries.forEach((blueberry) =>
      deleteBlueberry(blueberry.notesId, blueberry.uid)
    );
    deleteUnicornNoteById(id).then(() => getAndSetUnicornNotes());
  };

  return (
    <UnicornNotesContext.Provider
      value={{
        unicornNotes,
        getAndSetUnicornNotes,
        submitUnicornNote,
        deleteUnicornNote,
      }}
    >
      {children}
    </UnicornNotesContext.Provider>
  );
};
