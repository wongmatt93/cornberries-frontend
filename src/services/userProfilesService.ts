import axios from "axios";
import UserProfile from "../models/UserProfile";

const baseURL: string = process.env.REACT_APP_API_KEY || "";

export const getAllProfiles = async (): Promise<UserProfile[]> =>
  (await axios.get(`${baseURL}/user_profiles`)).data;

export const addNewProfile = async (
  profile: UserProfile
): Promise<UserProfile> =>
  (await axios.post(`${baseURL}/user_profiles`, profile)).data;
