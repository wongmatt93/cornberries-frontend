import axios from "axios";
import Blueberry from "../models/Blueberry";

const baseURL: string = process.env.REACT_APP_API_KEY || "";

export const getBlueberriesById = async (id: string): Promise<Blueberry[]> =>
  (await axios.get(`${baseURL}/blueberries/${encodeURIComponent(id)}`)).data;

export const addBlueberry = async (blueberry: Blueberry): Promise<Blueberry> =>
  (await axios.post(`${baseURL}/blueberries`, blueberry)).data;

export const deleteBlueberry = async (id: string, uid: string): Promise<void> =>
  (await axios.delete(`${baseURL}/blueberries/${id}/user/${uid}`)).data;
