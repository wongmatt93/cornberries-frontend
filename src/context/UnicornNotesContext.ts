import { createContext } from "react";
import Blueberry from "../models/Blueberry";
import UnicornNote from "../models/UnicornNote";

interface UnicornNotesContextModel {
  unicornNotes: UnicornNote[];
  getAndSetUnicornNotes: () => void;
  submitUnicornNote: (UnicornNote: UnicornNote) => void;
  deleteUnicornNote: (id: string, blueberries: Blueberry[]) => void;
}

const defaultValues: UnicornNotesContextModel = {
  unicornNotes: [],
  getAndSetUnicornNotes: () => {},
  submitUnicornNote: () => {},
  deleteUnicornNote: () => {},
};

export const UnicornNotesContext = createContext(defaultValues);
