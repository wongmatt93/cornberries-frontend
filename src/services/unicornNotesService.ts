import axios from "axios";
import UnicornNote from "../models/UnicornNote";

const baseURL: string = process.env.REACT_APP_API_UNICORN_NOTES_URL || "";

export const getUnicornNotes = async (): Promise<UnicornNote[]> =>
  (await axios.get(baseURL)).data;

export const postUnicornNote = async (
  note: UnicornNote
): Promise<UnicornNote> => (await axios.post(baseURL, note)).data;

export const deleteUnicornNoteById = async (id: string): Promise<void> =>
  (await axios.delete(`${baseURL}/${encodeURIComponent(id)}`)).data;
