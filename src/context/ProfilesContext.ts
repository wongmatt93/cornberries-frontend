import { createContext } from "react";
import UserProfile from "../models/UserProfile";

export interface ProfilesContextModel {
  profiles: UserProfile[];
}

const defaultValue: ProfilesContextModel = {
  profiles: [],
};

const ProfilesContext = createContext(defaultValue);
export default ProfilesContext;
