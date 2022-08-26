import { useContext, useEffect, useInsertionEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ProfilesContext from "../context/ProfilesContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { addNewProfile } from "../services/userProfilesService";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  const { profiles } = useContext(ProfilesContext);
  const location = useLocation();

  useEffect(() => {
    const navLinks = document.querySelectorAll(".main-nav-li");

    navLinks.forEach((link) =>
      location.pathname.includes(link.id) ||
      (location.pathname === "/" && link.id === "home")
        ? link.classList.add("active")
        : link.classList.remove("active")
    );
  }, [location]);

  useEffect(() => {
    if (user) {
      if (!profiles.some((profile) => profile.uid === user!.uid)) {
        addNewProfile({
          email: user.email,
          displayName: user.displayName,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
        });
      }
    }
  }, [user]);

  return (
    <header className="Header">
      <h1>
        <img
          src="/src/ub_mobile_logo.png"
          alt="mobile-logo"
          className="mobile-logo"
        />
        <img
          src="/src/ub_desktop_logo.png"
          alt="desktop-logo"
          className="desktop-logo"
        />
      </h1>
      <nav className="main-nav">
        <ul className="main-nav-ul">
          <Link to="/" style={{ textDecoration: "none" }}>
            <li id="home" className="main-nav-li">
              Home
            </li>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li id="about" className="main-nav-li">
              About
            </li>
          </Link>
          <Link to="/find-unicorns" style={{ textDecoration: "none" }}>
            <li id="find-unicorns" className="main-nav-li">
              Find Unicorns
            </li>
          </Link>
          <Link to="/find-blueberries" style={{ textDecoration: "none" }}>
            <li id="find-blueberries" className="main-nav-li">
              Find Blueberries
            </li>
          </Link>
        </ul>
      </nav>

      {user ? (
        <div className="dropdown">
          <div className="photo-container">
            <img
              src={user.photoURL!}
              alt="profile-pic"
              className="user-photo"
            />
          </div>
          <nav>
            <ul className="dropdown-content">
              <Link to="/user/personal" style={{ textDecoration: "none" }}>
                <li className="user-nav-li">View Your Profile</li>
              </Link>
              <li onClick={signOut} className="user-nav-li sign-out">
                Sign Out
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <button onClick={signInWithGoogle} className="sign-in-button">
          Sign In
        </button>
      )}
    </header>
  );
};

export default Header;
