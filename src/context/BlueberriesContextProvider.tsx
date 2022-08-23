import { ReactNode, useState } from "react";
import Blueberry from "../models/Blueberry";
import { getBlueberriesById } from "../services/blueberriesService";
import { BlueberriesContext } from "./BlueberriesContext";

interface Props {
  children: ReactNode;
}

export const BlueberriesContextProvider = ({ children }: Props) => {
  const [blueberriesByNote, setBlueberriesByNote] = useState<Blueberry[]>([]);

  const getAndSetBlueberriesByNoteId = (id: string): void => {
    getBlueberriesById(id).then((response) => setBlueberriesByNote(response));
  };

  return (
    <BlueberriesContext.Provider
      value={{ blueberriesByNote, getAndSetBlueberriesByNoteId }}
    >
      {children}
    </BlueberriesContext.Provider>
  );
};
