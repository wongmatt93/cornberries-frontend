import { createContext } from "react";
import UserProfile from "../models/UserProfile";

export interface ProfilesContextModel {
  profiles: UserProfile[];
  getProfileByUid: (uid: string) => UserProfile | undefined;
}

const defaultValue: ProfilesContextModel = {
  profiles: [],
  getProfileByUid: () => undefined,
};

const ProfilesContext = createContext(defaultValue);
export default ProfilesContext;
