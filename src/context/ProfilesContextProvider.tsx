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

  return (
    <ProfilesContext.Provider value={{ profiles }}>
      {children}
    </ProfilesContext.Provider>
  );
};

export default ProfilesContextProvider;
