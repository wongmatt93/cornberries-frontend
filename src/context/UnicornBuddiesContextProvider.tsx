import { ReactNode, useContext, useEffect, useState } from "react";
import UnicornBuddies from "../models/UnicornBuddies";
import { getUnicornBuddiesByUID } from "../services/unicornBuddiesService";
import AuthContext from "./AuthContext";
import UnicornBuddiesContext from "./UnicornBuddiesContext";

interface Props {
  children: ReactNode;
}

const UnicornBuddiesContextProvider = ({ children }: Props) => {
  const { user } = useContext(AuthContext);
  const [allConnections, setAllConnections] = useState<UnicornBuddies[]>([]);
  const [unicornBuddies, setUnicornBuddies] = useState<UnicornBuddies[]>([]);
  const [unicornInvites, setUnicornInvites] = useState<UnicornBuddies[]>([]);

  useEffect(() => {
    user &&
      getUnicornBuddiesByUID(user.uid).then((response) =>
        setAllConnections(response)
      );
  }, [user]);

  useEffect(() => {
    if (allConnections.length) {
      setUnicornBuddies(allConnections.filter((buddy) => buddy.accepted));
      setUnicornInvites(allConnections.filter((invite) => !invite.accepted));
    }
  }, [allConnections]);

  return (
    <UnicornBuddiesContext.Provider value={{ unicornBuddies, unicornInvites }}>
      {children}
    </UnicornBuddiesContext.Provider>
  );
};

export default UnicornBuddiesContextProvider;
