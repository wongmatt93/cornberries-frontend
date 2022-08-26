import axios from "axios";
import UnicornBuddies from "../models/UnicornBuddies";

const baseURL: string = process.env.REACT_APP_API_KEY || "";

export const getUnicornBuddiesByUID = async (
  uid: string
): Promise<UnicornBuddies[]> =>
  (await axios.get(`${baseURL}/unicorn_buddies/${uid}`)).data;
