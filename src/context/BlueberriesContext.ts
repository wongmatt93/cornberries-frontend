import { createContext } from "react";
import Blueberry from "../models/Blueberry";

interface BlueberriesContextModel {
  blueberriesByNote: Blueberry[];
  getAndSetBlueberriesByNoteId: (id: string) => void;
}

const defaultValues: BlueberriesContextModel = {
  blueberriesByNote: [],
  getAndSetBlueberriesByNoteId: () => {},
};

export const BlueberriesContext = createContext(defaultValues);
