import { createContext } from "react";
import UserProfile from "../models/UserProfile";

export interface UserProfileContextModel {
  userProfile: UserProfile | null;
}

const defaultValue: UserProfileContextModel = {
  userProfile: null,
};

export const UserProfileContext = createContext(defaultValue);
