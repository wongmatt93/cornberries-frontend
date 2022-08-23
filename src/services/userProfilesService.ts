import axios from "axios";
import UserProfile from "../models/UserProfile";

const baseURL: string = process.env.REACT_APP_API_USER_PROFILES_URL || "";

export const getUserProfiles = async (): Promise<UserProfile[]> =>
  (await axios.get(baseURL)).data;

export const getUserProfileByUid = async (
  id: string
): Promise<UserProfile | null> => (await axios.get(`${baseURL}/${id}`)).data;

export const postUserProfile = async (
  user: UserProfile
): Promise<UserProfile> => (await axios.post(baseURL, user)).data;

export const deleteUserById = async (id: string): Promise<void> =>
  (await axios.delete(`${baseURL}/${encodeURIComponent(id)}`)).data;
