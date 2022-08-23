import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import {
  getUserProfiles,
  postUserProfile,
} from "../services/userProfilesService";
import UserProfile from "../models/UserProfile";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
      newUser?.displayName
        ? setUserName(newUser.displayName)
        : setUserName("Anonymous");
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, userName }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
