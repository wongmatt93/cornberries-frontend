import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import UnicornBuddies from "../models/UnicornBuddies";
import { getUnicornBuddiesByUID } from "../services/unicornBuddiesService";
import "./PersonalProfile.css";

const PersonalProfile = () => {
  const { user } = useContext(AuthContext);
  const [unicornBuddies, setUnicornBuddies] = useState<UnicornBuddies[]>([]);
  const [unicornInvites, setUnicornInvites] = useState<UnicornBuddies[]>([]);

  useEffect(() => {
    user &&
      getUnicornBuddiesByUID(user!.uid).then((response) => {
        setUnicornBuddies(response.filter((buddy) => buddy.accepted));
        setUnicornInvites(response.filter((invite) => !invite.accepted));
      });
  }, []);

  return (
    <main className="PersonalProfile">
      <h2>Your Profile</h2>
      {user && (
        <>
          <h3>{user?.displayName}</h3>
          <p>{unicornBuddies.length} Unicorn Buddies</p>
          <p>{unicornInvites.length} Pending Invites</p>
        </>
      )}
    </main>
  );
};

export default PersonalProfile;
