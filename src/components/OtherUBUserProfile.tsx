import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ProfilesContext from "../context/ProfilesContext";
import UnicornBuddiesContext from "../context/UnicornBuddiesContext";
import UserProfile from "../models/UserProfile";
import {
  acceptUnicornBuddy,
  addUnicornBuddy,
  deleteUnicornBuddy,
} from "../services/unicornBuddiesService";
import "./OtherUBUserProfile.css";

const OtherUBUserProfile = () => {
  const { user } = useContext(AuthContext);
  const { unicornBuddies, unicornInvites } = useContext(UnicornBuddiesContext);
  const { getProfileByUid } = useContext(ProfilesContext);
  const [buddyStatus, setBuddyStatus] = useState("");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const uid: string | undefined = useParams().uid;

  const handleAddBuddyClick = (): void => {
    user &&
      uid &&
      addUnicornBuddy({ uid1: user.uid, uid2: uid, accepted: false }).then();
  };

  const handleAcceptBuddyClick = (): void => {
    user && uid && acceptUnicornBuddy(uid, user.uid).then();
  };

  const handleDeclineBuddyClick = (): void => {
    user && uid && deleteUnicornBuddy(uid, user.uid).then();
  };

  useEffect(() => {
    if (user) {
      if (unicornBuddies.some((buddy) => (buddy.uid1 || buddy.uid2) === uid)) {
        setBuddyStatus("buddies");
      } else if (unicornInvites.some((invite) => invite.uid2 === uid)) {
        setBuddyStatus("sent");
      } else if (
        unicornInvites.some(
          (invite) => invite.uid1 === uid && invite.uid2 === user.uid
        )
      ) {
        setBuddyStatus("pending");
      }
    }
    setUserProfile(getProfileByUid(uid!)!);
  }, [user, uid]);

  return (
    <main className="OtherUBUserProfile">
      <h2>{userProfile!.displayName}</h2>
      {buddyStatus === "buddies" ? (
        <p>Unicorn Buddies!</p>
      ) : buddyStatus === "pending" ? (
        <>
          <button onClick={handleAcceptBuddyClick}>Accept Buddy Request</button>
          <button onClick={handleDeclineBuddyClick}>
            Decline Buddy Request
          </button>
        </>
      ) : buddyStatus === "sent" ? (
        <p>Sent Request</p>
      ) : (
        <button onClick={handleAddBuddyClick}>Add Unicorn Buddy</button>
      )}
    </main>
  );
};

export default OtherUBUserProfile;
