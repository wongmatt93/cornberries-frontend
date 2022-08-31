import { createContext } from "react";
import UnicornBuddies from "../models/UnicornBuddies";

export interface UnicornBuddiesContextModel {
  unicornBuddies: UnicornBuddies[];
  unicornInvites: UnicornBuddies[];
}

const defaultValue: UnicornBuddiesContextModel = {
  unicornBuddies: [],
  unicornInvites: [],
};

const UnicornBuddiesContext = createContext(defaultValue);
export default UnicornBuddiesContext;
