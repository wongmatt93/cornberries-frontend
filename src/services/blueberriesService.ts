import axios from "axios";
import Blueberry from "../models/Blueberry";

const baseURL: string = process.env.REACT_APP_API_BLUEBERRIES_URL || "";

export const getBlueberriesById = async (id: string): Promise<Blueberry[]> =>
  (await axios.get(`${baseURL}/${encodeURIComponent(id)}`)).data;

export const addBlueberry = async (blueberry: Blueberry): Promise<Blueberry> =>
  (await axios.post(baseURL, blueberry)).data;

export const deleteBlueberry = async (id: string, uid: string): Promise<void> =>
  (await axios.delete(`${baseURL}/${id}/user/${uid}`)).data;
