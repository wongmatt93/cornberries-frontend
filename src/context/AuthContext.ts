import { User } from "firebase/auth";
import { createContext } from "react";

export interface AuthContextModel {
  user: User | null; // null when not logged in
  userName: string;
}

const defaultValue: AuthContextModel = {
  user: null,
  userName: "",
};

const AuthContext = createContext(defaultValue);
export default AuthContext;
