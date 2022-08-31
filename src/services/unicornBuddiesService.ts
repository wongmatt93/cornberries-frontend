import axios from "axios";
import UnicornBuddies from "../models/UnicornBuddies";

const baseURL: string = process.env.REACT_APP_API_KEY || "";

export const getUnicornBuddiesByUID = async (
  uid: string
): Promise<UnicornBuddies[]> =>
  (await axios.get(`${baseURL}/unicorn_buddies/${uid}`)).data;

export const addUnicornBuddy = async (
  unicornBuddy: UnicornBuddies
): Promise<UnicornBuddies> =>
  (await axios.post(`${baseURL}/unicorn_buddies`, unicornBuddy)).data;

export const acceptUnicornBuddy = async (
  uid1: string,
  uid2: string
): Promise<UnicornBuddies> =>
  (await axios.put(`${baseURL}/unicorn_buddies/${uid1}/${uid2}`)).data;

export const deleteUnicornBuddy = async (
  uid1: string,
  uid2: string
): Promise<UnicornBuddies> =>
  (await axios.delete(`${baseURL}/unicorn_buddies/${uid1}/${uid2}`)).data;
