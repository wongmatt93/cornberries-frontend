import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import UnicornBuddiesContext from "../context/UnicornBuddiesContext";
import "./PersonalProfile.css";

const PersonalProfile = () => {
  const { user } = useContext(AuthContext);
  const { unicornBuddies, unicornInvites } = useContext(UnicornBuddiesContext);

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
