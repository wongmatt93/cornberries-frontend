import axios from "axios";
import UnicornNote from "../models/UnicornNote";

const baseURL: string = process.env.REACT_APP_API_KEY || "";

export const getUnicornNotes = async (): Promise<UnicornNote[]> =>
  (await axios.get(`${baseURL}/unicorn_notes`)).data;

export const postUnicornNote = async (
  note: UnicornNote
): Promise<UnicornNote> =>
  (await axios.post(`${baseURL}/unicorn_notes`, note)).data;

export const deleteUnicornNoteById = async (id: string): Promise<void> =>
  (
    await axios.delete(
      `${`${baseURL}/unicorn_notes`}/${encodeURIComponent(id)}`
    )
  ).data;
