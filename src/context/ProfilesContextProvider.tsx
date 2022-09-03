import { ReactNode, useContext, useEffect, useState } from "react";
import UserProfile from "../models/UserProfile";
import { getAllProfiles } from "../services/userProfilesService";
import AuthContext from "./AuthContext";
import ProfilesContext from "./ProfilesContext";

interface Props {
  children: ReactNode;
}

const ProfilesContextProvider = ({ children }: Props) => {
  const { user } = useContext(AuthContext);
  const [profiles, setProfiles] = useState<UserProfile[]>([]);

  useEffect(() => {
    getAllProfiles().then((response) => setProfiles(response));
  }, [user]);

  const getProfileByUid = (uid: string): UserProfile | undefined =>
    profiles.find((profile) => profile.uid === uid);

  return (
    <ProfilesContext.Provider value={{ profiles, getProfileByUid }}>
      {children}
    </ProfilesContext.Provider>
  );
};

export default ProfilesContextProvider;
